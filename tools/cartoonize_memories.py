from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "assets" / "memories" / "source"
OUT_DIR = ROOT / "assets" / "memories" / "cartoon"
YEARS = [str(year) for year in range(2019, 2027)]


def fit_for_web(image, max_side=1500):
    width, height = image.size
    scale = min(1, max_side / max(width, height))
    if scale == 1:
        return image
    return image.resize((round(width * scale), round(height * scale)), Image.Resampling.LANCZOS)


def make_edge_mask(image):
    gray = ImageOps.grayscale(image)
    gray = gray.filter(ImageFilter.MedianFilter(3))
    edges = gray.filter(ImageFilter.FIND_EDGES)
    edges = ImageOps.autocontrast(edges)
    edges = edges.filter(ImageFilter.MaxFilter(3))
    mask = edges.point(lambda value: 170 if value > 32 else 0)
    return mask.filter(ImageFilter.GaussianBlur(0.35))


def cartoonize(image):
    image = fit_for_web(ImageOps.exif_transpose(image).convert("RGB"))
    base = image.filter(ImageFilter.SMOOTH_MORE).filter(ImageFilter.SMOOTH_MORE)
    base = ImageEnhance.Color(base).enhance(1.26)
    base = ImageEnhance.Contrast(base).enhance(1.08)
    base = ImageEnhance.Brightness(base).enhance(1.02)

    poster = ImageOps.posterize(base, 5)
    palette = poster.quantize(colors=56, method=Image.Quantize.MEDIANCUT).convert("RGB")
    painted = Image.blend(base, palette, 0.58)
    painted = painted.filter(ImageFilter.UnsharpMask(radius=1.2, percent=135, threshold=3))

    outline_mask = make_edge_mask(base)
    outline = Image.new("RGB", image.size, (43, 48, 56))
    painted.paste(outline, mask=outline_mask)

    return ImageEnhance.Color(painted).enhance(1.08)


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for year in YEARS:
        src = SOURCE_DIR / f"{year}.jpg"
        out = OUT_DIR / f"{year}-cartoon.jpg"
        if not src.exists():
            print(f"missing {src}")
            continue
        with Image.open(src) as image:
            result = cartoonize(image)
            result.save(out, quality=88, optimize=True, progressive=True)
        print(f"wrote {out.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
