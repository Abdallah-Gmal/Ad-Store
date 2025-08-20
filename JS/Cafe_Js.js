// ------------------- [ On load ]-----------------------

window.addEventListener("load", () => {
  window.scrollTo({ top: 0, behavior: "instant" });
});
// ------------------- [ print scoll]-----------------------
window.addEventListener("scroll", () => {
  console.log(window.scrollY); // يطبع قيمة السكروول من فوق
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
        `${hours.toString().padStart(2, "0")}:` +
        `${minutes.toString().padStart(2, "0")}:` +
        `${seconds.toString().padStart(2, "0")}`;
    } else {
      // يعني الكافيه مقفول
      timerEl.innerHTML = "We Close";
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
// ------------------- [Start background special ]-----------------------
// const back_ground_special = document.querySelector(".back_ground_special");
// const all_items_background = document.querySelectorAll(".one_item");

// const coffe_cub_one = document.querySelector(".coffe_cub_one");
// const coffe_cub_two = document.querySelector(".coffe_cub_two");
// const coffe_cub_Three = document.querySelector(".coffe_cub_Three");
// const coffe_cub_Four = document.querySelector(".coffe_cub_Four");
// const coffe_cub_five = document.querySelector(".coffe_cub_five");
// const coffe_cub_6 = document.querySelector(".coffe_cub_6");
// const coffe_cub_7 = document.querySelector(".coffe_cub_7");
// const coffe_cub_8 = document.querySelector(".coffe_cub_8");
// const coffe_cub_9 = document.querySelector(".coffe_cub_9");
// const coffe_cub_10 = document.querySelector(".coffe_cub_10");
// const coffe_cub_11 = document.querySelector(".coffe_cub_11");
// const coffe_cub_12 = document.querySelector(".coffe_cub_12");
// const coffe_cub_13 = document.querySelector(".coffe_cub_13");
// const coffe_cub_14 = document.querySelector(".coffe_cub_14");
// const coffe_cub_15 = document.querySelector(".coffe_cub_15");
// const coffe_cub_16 = document.querySelector(".coffe_cub_16");
// const coffe_cub_17 = document.querySelector(".coffe_cub_17");
// const coffe_cub_18 = document.querySelector(".coffe_cub_18");
// const coffe_cub_19 = document.querySelector(".coffe_cub_19");
// const coffe_cub_20 = document.querySelector(".coffe_cub_20");

// const item_special_1 = document.querySelector(".item_special_1");
// const item_special_2 = document.querySelector(".item_special_2");
// const item_special_3 = document.querySelector(".item_special_3");
// const item_special_4 = document.querySelector(".item_special_4");
// const item_special_5 = document.querySelector(".item_special_5");
// const item_special_6 = document.querySelector(".item_special_6");
// const item_special_7 = document.querySelector(".item_special_7");
// const item_special_8 = document.querySelector(".item_special_8");
// const item_special_9 = document.querySelector(".item_special_9");
// const item_special_10 = document.querySelector(".item_special_10");
// const item_special_11 = document.querySelector(".item_special_11");
// const item_special_12 = document.querySelector(".item_special_12");
// const item_special_13 = document.querySelector(".item_special_13");
// const item_special_14 = document.querySelector(".item_special_14");
// const item_special_15 = document.querySelector(".item_special_15");
// const item_special_16 = document.querySelector(".item_special_16");
// const item_special_17 = document.querySelector(".item_special_17");
// const item_special_18 = document.querySelector(".item_special_18");
// const item_special_19 = document.querySelector(".item_special_19");
// const item_special_20 = document.querySelector(".item_special_20");

// // coffe_cub_one
// item_special_1.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_one.classList.remove("active");
// });

// // coffe_cub_two
// item_special_2.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_two.classList.remove("active");
// });

// // coffe_cub_three
// item_special_3.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_Three.classList.remove("active");
// });
// // coffe_cub_four
// item_special_4.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_Four.classList.remove("active");
// });

// // coffe_cub_five
// item_special_5.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_five.classList.remove("active");
// });
// // coffe_cub_6
// item_special_6.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_6.classList.remove("active");
// });
// // coffe_cub_7
// item_special_7.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_7.classList.remove("active");
// });
// // coffe_cub_8
// item_special_8.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_8.classList.remove("active");
// });
// // coffe_cub_9
// item_special_9.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_9.classList.remove("active");
// });
// // coffe_cub_10
// item_special_10.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_10.classList.remove("active");
// });
// // coffe_cub_11
// item_special_11.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_11.classList.remove("active");
// });
// // coffe_cub_12
// item_special_12.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_12.classList.remove("active");
// });
// // coffe_cub_13
// item_special_13.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_13.classList.remove("active");
// });
// // coffe_cub_14
// item_special_14.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_14.classList.remove("active");
// });
// // coffe_cub_15
// item_special_15.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_15.classList.remove("active");
// });
// // coffe_cub_16
// item_special_16.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_16.classList.remove("active");
// });
// // coffe_cub_17
// item_special_17.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_17.classList.remove("active");
// });
// // coffe_cub_18
// item_special_18.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_18.classList.remove("active");
// });
// // coffe_cub_19
// item_special_19.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_19.classList.remove("active");
// });
// // coffe_cub_20
// item_special_20.addEventListener("click", () => {
//   back_ground_special.classList.remove("active");
//   all_items_background.forEach((item) => {
//     item.classList.add("active");
//   });
//   coffe_cub_20.classList.remove("active");
// });

// // start Esc btn
// const Esc_btn = document.querySelectorAll(".Esc_btn");
// Esc_btn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     back_ground_special.classList.add("active");
//   });
// });
// ------------------- [End background special ]-----------------------
// const back_ground_special = document.querySelector(".back_ground_special");
// const all_items_background = document.querySelectorAll(".one_item");

// // ربط كل الأزرار الخاصة بالـ items مع الكؤوس
// for (let i = 1; i <= 20; i++) {
//   const item = document.querySelector(`.item_special_${i}`);
//   const cup = document.querySelector(`.coffe_cub_${i === 1 ? "one" : i}`);

//   item.addEventListener("click", () => {
//     back_ground_special.classList.remove("active");
//     all_items_background.forEach((el) => el.classList.add("active"));
//     cup.classList.remove("active");
//   });
// }

// // زر Esc
// document.querySelectorAll(".Esc_btn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     back_ground_special.classList.add("active");
//   });
// });

// ----------------------------
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

// ------------------- [visitor ]-----------------------
const visitorList = document.getElementById("visitorList");

// جلب البيانات السابقة من Local Storage أو إنشاء مصفوفة جديدة
let visitors = JSON.parse(localStorage.getItem("visitors")) || [];

// الحصول على التاريخ والوقت الحالي
const now = new Date();
const pad = (n) => String(n).padStart(2, "0");

const visit = {
  date: now.toLocaleDateString(), // التاريخ
  time: `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(
    now.getSeconds()
  )}`, // الوقت
  day: now.toLocaleDateString("en-US", { weekday: "long" }), // اسم اليوم
};

// إضافة الزيارة الجديدة للمصفوفة
visitors.push(visit);

// تخزينها في Local Storage
localStorage.setItem("visitors", JSON.stringify(visitors));

// عرض القائمة
visitorList.innerHTML = visitors
  .map((v) => `<li>${v.day} - ${v.date} - ${v.time}</li>`)
  .join("");
