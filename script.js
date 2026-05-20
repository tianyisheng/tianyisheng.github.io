const memories = [
  {
    time: "2019年11月30号 晚上",
    year: "2019",
    title: "第一次语音",
    place: "第一次语音",
    detail:
      "我们第一次语音，聊了一个小时21分钟，聊了很多话题，也是真在把我们的距离拉近。",
    caption: "第一次语音，把距离一点点拉近。",
    color: "#ff6f61",
    scene: "call",
  },
  {
    time: "2020年",
    year: "2020",
    title: "西北大环线",
    place: "西宁 · 青海湖 · 敦煌 · 茶卡 · 张掖",
    detail:
      "第一次去旅行，西北大环线（甘肃-青海，或者叫青甘大环线），去了西宁、青海湖、敦煌（莫高窟、鸣沙山）、茶卡盐湖、张掖七彩丹霞，拍了很多人生照片，准备再去一趟。",
    caption: "青甘大环线，是会发光的人生照片。",
    color: "#ffd166",
    scene: "northwest",
  },
  {
    time: "2021年",
    year: "2021",
    title: "厦门元旦跨年 & 贵州黔东南",
    place: "厦门 · 黔东南",
    detail: "厦门元旦跨年旅行 和 贵州黔东南的旅行，我们玩得都很开心。",
    caption: "跨年、山水和笑声，都被认真收藏。",
    color: "#3bc3c8",
    scene: "sea",
  },
  {
    time: "2022年 六月 & 十一",
    year: "2022",
    title: "西安 & 泉州旅行",
    place: "西安 · 泉州",
    detail: "六月的西安 和 十一 泉州旅行让我们领略了古代的文化交融。",
    caption: "从西安到泉州，古城里的风把历史和我们吹到一起。",
    color: "#b99cff",
    scene: "city",
  },
  {
    time: "2023年",
    year: "2023",
    title: "川西秘境 & 0914 香水",
    place: "川西秘境 · 0914",
    detail: "去了川西秘境，9月14号生日一起做香水，香水的名字叫（0914）。",
    caption: "川西的秘境和0914，都是被认真记住的一天。",
    color: "#ff8fb1",
    scene: "perfume",
  },
  {
    time: "2024年元旦",
    year: "2024",
    title: "西双版纳旅行",
    place: "西双版纳",
    detail: "元旦西双版纳旅行。",
    caption: "热带的风、明亮的叶子，还有新年的快乐。",
    color: "#80ed99",
    scene: "tropical",
  },
  {
    time: "2025年元旦 & 五一",
    year: "2025",
    title: "机器人之梦 & 槟城",
    place: "跨年夜 · 马来西亚槟城",
    detail:
      "元旦跨年夜，当时看了一部很重要的电影《机器人之梦》，这个电影对我们影响很大。2025年五一马来西亚槟城旅行让我们爱上了“椰浆饭”。",
    caption: "一部电影，一碗椰浆饭，都是心里的坐标。",
    color: "#5b8def",
    scene: "movie",
  },
  {
    time: "2026年",
    year: "2026",
    title: "福州旅行",
    place: "福州",
    detail: "福州旅行，和老同学相聚。",
    caption: "新的城市、旧的朋友，和一直在身边的人。",
    color: "#f6a03b",
    scene: "friends",
  },
];

const fortunes = [
  "今天的你，是最闪亮的星 ✨",
  "爱与快乐每天都在你身边 💖",
  "渐渐会一直陪伴你，永远不离不弃 😻",
  "每天都要笑得像阳光一样灿烂 🌞",
  "爱与温暖环绕在你左右 ❤️",
  "希望你的梦想都能成真 🌟",
  "愿生活总有惊喜和甜蜜 🍬",
  "每一次努力都值得被赞美 🌸",
  "快乐像气球一样飞向天空 🎈",
  "永远幸福，像童话故事一样 ✨",
  "愿你走到哪里，都有温柔的光为你亮起 🌙",
  "今天适合许愿，也适合被我们狠狠偏爱 💌",
  "愿每一本书都把你带到更辽阔的地方 📚",
  "下一次旅行，会遇见新的风景和新的喜欢 🚲",
  "愿你看过的电影，都把美好悄悄留在心里 🎬",
  "网球场上的每一次挥拍，都击中好运 🎾",
  "愿普通日子也有奶油、星星和抱抱 🧁",
  "你值得被世界认真温柔地对待 🌷",
  "今天的快乐会发芽，长成好多好多明天 🌱",
  "愿你醒来有期待，睡前有满足 ☁️",
  "所有辛苦都会变成闪闪发亮的勋章 🏅",
  "愿你永远保留可爱，也永远拥有勇气 🐾",
  "未来的路，我们继续一起慢慢走 🚶",
  "愿每一次出发，都带回满满的故事 🧳",
  "好吃的、好玩的、好看的，都要排队奔向你 🍰",
  "愿心里的小愿望，悄悄变成真实的光 💫",
  "今天的风也在说：Keai 生日快乐 🎐",
  "愿你被爱包围，也被自由托住 🪽",
  "所有浪漫都会记得你的名字 🌹",
  "愿 Keai 永远幸福，永远被渐渐和 YanSu 宠爱 💞",
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const timeline = document.querySelector("[data-timeline]");
const memoryCaption = document.querySelector("[data-memory-caption]");
const memoryYear = document.querySelector("[data-memory-year]");
const memoryPlace = document.querySelector("[data-memory-place]");
const memoryScene = document.querySelector("[data-memory-scene]");
const memoryPhoto = document.querySelector("[data-memory-photo]");
const memoryPhotoBg = document.querySelector("[data-memory-photo-bg]");
const cookieButton = document.querySelector("[data-cookie-button]");
const fortuneCard = document.querySelector("[data-fortune-card]");
const fortuneCount = document.querySelector("[data-fortune-count]");
const fortuneMessage = document.querySelector("[data-fortune-message]");
const catButton = document.querySelector("[data-cat-button]");
const catSpeech = document.querySelector("#cat-speech");

function renderTimeline() {
  const fragment = document.createDocumentFragment();

  memories.forEach((memory, index) => {
    const item = document.createElement("div");
    item.className = "memory-item reveal";
    item.style.setProperty("--dot-color", memory.color);

    const dot = document.createElement("span");
    dot.className = "memory-dot";
    dot.setAttribute("aria-hidden", "true");

    const button = document.createElement("button");
    button.className = "memory-card";
    button.type = "button";
    button.dataset.index = String(index);
    button.setAttribute("aria-pressed", "false");
    button.innerHTML = `
      <time>${memory.time}</time>
      <h3>${memory.title}</h3>
      <p>${memory.detail}</p>
    `;

    item.append(dot, button);
    fragment.append(item);
  });

  timeline.append(fragment);
}

function setActiveMemory(index) {
  const memory = memories[index];
  document.querySelectorAll(".memory-card").forEach((card) => {
    const active = Number(card.dataset.index) === index;
    card.classList.toggle("is-active", active);
    card.setAttribute("aria-pressed", String(active));
  });

  memoryCaption.textContent = memory.caption;
  memoryYear.textContent = memory.year;
  memoryPlace.textContent = memory.place;
  memoryScene.dataset.scene = memory.scene;
  memoryScene.style.setProperty("--scene-color", memory.color);
  const imageSrc = `./assets/memories/cartoon/${memory.year}-cartoon.jpg`;
  memoryPhoto.src = imageSrc;
  memoryPhoto.alt = `${memory.year}年的卡通化回忆照片：${memory.title}`;
  memoryPhotoBg.src = imageSrc;

  if (!reduceMotion) {
    memoryScene.animate(
      [
        { transform: "scale(0.98)", filter: "saturate(0.86)" },
        { transform: "scale(1)", filter: "saturate(1)" },
      ],
      { duration: 260, easing: "ease-out" },
    );
  }
}

function createConfetti() {
  const layer = document.querySelector(".confetti-layer");
  const colors = ["#ff6f61", "#ffd166", "#3bc3c8", "#5b8def", "#b99cff", "#80ed99"];

  for (let index = 0; index < 70; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.setProperty("--fall-duration", `${6 + Math.random() * 7}s`);
    piece.style.setProperty("--fall-delay", `${Math.random() * -10}s`);
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    layer.append(piece);
  }
}

function revealOnScroll() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function randomFortune() {
  const index = Math.floor(Math.random() * fortunes.length);
  fortuneCount.textContent = `第 ${index + 1} 枚幸运签`;
  fortuneMessage.textContent = fortunes[index];
  fortuneCard.classList.add("is-visible");
  cookieButton.classList.add("is-open");

  if (!reduceMotion) {
    popHearts(cookieButton, ["✦", "♡", "✨", "💖"]);
    fortuneCard.animate(
      [
        { transform: "translateY(12px) scale(0.96)" },
        { transform: "translateY(-4px) scale(1.02)" },
        { transform: "translateY(0) scale(1)" },
      ],
      { duration: 360, easing: "ease-out" },
    );
  }

  window.setTimeout(() => cookieButton.classList.remove("is-open"), 520);
}

function popHearts(target, symbols = ["♡", "❤", "✦"]) {
  const rect = target.getBoundingClientRect();

  for (let index = 0; index < 9; index += 1) {
    const heart = document.createElement("span");
    heart.className = "heart-pop";
    heart.textContent = symbols[index % symbols.length];
    heart.style.left = `${rect.left + rect.width / 2 + (Math.random() - 0.5) * rect.width}px`;
    heart.style.top = `${rect.top + rect.height / 2 + (Math.random() - 0.5) * 40}px`;
    heart.style.color = ["#ff6f61", "#ff8fb1", "#ffd166", "#5b8def"][index % 4];
    heart.style.animationDelay = `${index * 35}ms`;
    document.body.append(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }
}

function catBlessing() {
  const lines = [
    "“生日快乐 Keai~每天都要被我和 YanSu 宠爱哦！”",
    "“今天你最大，我负责卖萌，YanSu 负责把快乐安排满！”",
    "“要一直开心，一直被抱抱，一直有好吃的和好看的电影！”",
    "“我已经把好运踩成小脚印，全部送给 Keai 啦！”",
    "“新的生日愿望，也要有我和 YanSu 的位置哦！”",
  ];
  const current = lines.indexOf(catSpeech.textContent);
  const next = (current + 1 + Math.floor(Math.random() * (lines.length - 1))) % lines.length;
  catSpeech.textContent = lines[next];

  if (!reduceMotion) {
    popHearts(catButton, ["♡", "😺", "💖"]);
    document.querySelector(".interactive-cat").animate(
      [
        { transform: "translateY(0) scale(1)" },
        { transform: "translateY(-8px) scale(1.02)" },
        { transform: "translateY(0) scale(1)" },
      ],
      { duration: 360, easing: "ease-out" },
    );
  }
}

renderTimeline();
setActiveMemory(0);
revealOnScroll();

if (!reduceMotion) {
  createConfetti();
}

timeline.addEventListener("click", (event) => {
  const card = event.target.closest(".memory-card");
  if (!card) return;
  setActiveMemory(Number(card.dataset.index));
});

cookieButton.addEventListener("click", randomFortune);
catButton.addEventListener("click", catBlessing);

window.addEventListener("load", () => {
  document.querySelector(".hero-copy")?.classList.add("is-visible");
});
