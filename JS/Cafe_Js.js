// ------------------- [ On load ]-----------------------

window.addEventListener("load", () => {
  window.scrollTo({ top: 0, behavior: "instant" });
});

// ------------------- [ Dark_light_Mod]-----------------------
const chang_color = document.querySelector(".chang_color");
const chang_color_btn = document.querySelector(".chang_color_btn");
const body = document.body;
chang_color_btn.addEventListener("click", () => {
  chang_color_btn.classList.toggle("active");
  chang_color.classList.toggle("active");
  body.classList.toggle("active");
});

// chang root

chang_color_btn.addEventListener("click", () => {
  const root = document.documentElement;

  const current = getComputedStyle(root)
    .getPropertyValue("--main-color")
    .trim();

  if (current === "white") {
    root.style.setProperty("--main-color", "rgb(201, 178, 148)");
  } else {
    root.style.setProperty("--main-color", "white");
  }
});
// ------------------- [ to focus main screen ]-----------------------
window.addEventListener("load", () => {
  const topText = document.querySelector(".top_text");
  if (topText) {
    topText.scrollIntoView({ behavior: "auto", block: "start" });
  }
});

// ------------------- [Start  nav ]-----------------------

let nav = document.querySelector(".nav");
let show_nav = document.querySelector(".show_nav");
show_nav.addEventListener("click", () => {
  nav.classList.toggle("active");
});
document.addEventListener("click", (event) => {
  // لو الدوسة مش جوة nav
  if (!nav.contains(event.target)) {
    nav.classList.remove("active");
  }
});

// ------------------- [End  nav ]-----------------------

// ------------------- [start timer ]-----------------------

function startCountdown() {
  const timerEl = document.getElementById("timer");

  function updateTimer() {
    const now = new Date();

    // نحدد وقت بداية العمل (11 AM)
    const startTime = new Date();
    startTime.setHours(8, 0, 0, 0);

    // نحدد وقت نهاية العمل (3 AM لليوم التالي)
    const endTime = new Date(startTime);
    endTime.setDate(endTime.getDate() + 1); // نضيف يوم
    endTime.setHours(3, 0, 0, 0);

    if (now >= startTime && now < endTime) {
      // يعني الكافيه فاتح
      const distance = endTime - now;

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timerEl.innerHTML =
        ` <i class="fa-solid fa-face-smile-beam"></i> ${hours
          .toString()
          .padStart(2, "0")}:` +
        `${minutes.toString().padStart(2, "0")}:` +
        `${seconds.toString().padStart(2, "0")}`;
    } else {
      // يعني الكافيه مقفول
      timerEl.innerHTML = `<i class="fa-solid fa-face-frown"></i> We Close`;
    }
  }

  updateTimer(); // تشغيل أول مرة
  setInterval(updateTimer, 1000); // تحديث كل ثانية
}

startCountdown();

const time_now = document.querySelector(".time_now");
const time_at_the_moment = new Date();
const hours = time_at_the_moment.getHours(); // 0-23
const minutes = time_at_the_moment.getMinutes(); // 0-59
const seconds = time_at_the_moment.getSeconds(); // 0-59

let hoursString = String(hours);
if (Number(hoursString.length) === 1) {
  time_now.innerHTML = ` Time Now [ 0${hours}:${minutes}:${seconds} ] `;
} else {
  time_now.innerHTML = `${hours}:${minutes}:${seconds}`;
}

// ------------------- [End timer ]-----------------------
// ------------------- [Start  special 4 icon ]-----------------------
const items_box = document.querySelectorAll(".item_box");
const coffe_item = document.querySelector(".coffe_item");
const tea_item = document.querySelector(".tea_item");
const jucie_item = document.querySelector(".jucie_item");
const icecream_item = document.querySelector(".icecream_item");

const coffe_icon = document.querySelector(".coffe_icon");
const tea_icon = document.querySelector(".tea_icon");
const jucie_icon = document.querySelector(".jucie_icon");
const icecream_icon = document.querySelector(".icecream_icon");

// icon number 1
coffe_icon.addEventListener("click", () => {
  items_box.forEach((item) => {
    item.classList.add("active");
  });
  coffe_item.classList.remove("active");
});

// icon number 2
tea_icon.addEventListener("click", () => {
  items_box.forEach((item) => {
    item.classList.add("active");
  });
  tea_item.classList.remove("active");
});

// icon number 3
jucie_icon.addEventListener("click", () => {
  items_box.forEach((item) => {
    item.classList.add("active");
  });
  jucie_item.classList.remove("active");
});

// icon number 4
icecream_icon.addEventListener("click", () => {
  items_box.forEach((item) => {
    item.classList.add("active");
  });
  icecream_item.classList.remove("active");
});

// ------------------- [End  special 4 icon ]-----------------------
// ------------------- [Start background ]-----------------------

const back_ground_special = document.querySelector(".back_ground_special");
const all_items_background = document.querySelectorAll(".one_item");

const items_special = document.querySelectorAll("[class^='item_special_']");

items_special.forEach((item, index) => {
  item.addEventListener("click", () => {
    back_ground_special.classList.remove("active");
    all_items_background.forEach((el) => el.classList.add("active"));

    const cub = document.querySelector(`.coffe_cub_${index + 1}`);
    if (cub) cub.classList.remove("active");
  });
});

document.querySelectorAll(".Esc_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    back_ground_special.classList.add("active");
  });
});

// ------------------- [End background ]-----------------------
