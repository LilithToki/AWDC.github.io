/*chart */
document.addEventListener("DOMContentLoaded", function () {
  const fifthtwo = document.querySelector(".fifthtwo");
  const line = document.querySelector(".fifththreechart .line");

  function checkPosition() {
    const rect = fifthtwo.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      // 当 fifthtwo 进入视口时，开始动画
      line.style.strokeDashoffset = "0";
    } else {
      // 当 fifthtwo 离开视口时，重置动画
      line.style.strokeDashoffset = "1000";
    }
  }

  // 初始检查
  checkPosition();

  window.addEventListener("scroll", function () {
    checkPosition();
  });
});
/*scroll */
document.addEventListener("DOMContentLoaded", function () {
  const first = document.getElementById("first");
  const second = document.getElementById("second");
  const firstButton = document.querySelector(".firsttwo");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    // cover
    let scrollPos = scrollPosition / 1000;
    document.querySelector(".seaweed1").style.opacity = 1 - 1.2 * scrollPos;
    document.querySelector(".seaweed2").style.opacity = 1 - 1.4 * scrollPos;
    document.querySelector(".seaweed3").style.opacity = 1 - 1.1 * scrollPos;
    document.querySelector(".seaweed4").style.opacity = 1 - 1.3 * scrollPos;
    document.querySelector(".seaweed5").style.opacity = 1 - 1.2 * scrollPos;
    document.querySelector(".seaweed6").style.opacity = 1 - 1.4 * scrollPos;
    document.querySelector(".seaweed7").style.opacity = 1 - 1.4 * scrollPos;
    document.querySelector(".seaweed8").style.opacity = 1 - 1.4 * scrollPos;
    // background
    if (scrollPosition >= firstButton.offsetTop) {
      first.style.backgroundColor = "#d6d6d6";
      second.style.backgroundColor = "#d6d6d6";
    } else {
      first.style.backgroundColor = "#d6d6d6";
      second.style.backgroundColor = "#d6d6d6";
    }
  });
});
//donate
//nav
const elApp = document.querySelector("#app");
const elStateNav = document.querySelectorAll("[data-to]");

Array.from(elStateNav).forEach((el) => {
  el.addEventListener("click", () => {
    elApp.dataset.state = el.dataset.to;
  });
});

//drop
function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();

  const dropZone = document.getElementById("drop-zone");
  const fileInfo = document.getElementById("file-info");
  const fileInfo2 = document.getElementById("file-info2");

  const files = event.dataTransfer.files;

  if (files.length > 0) {
    const file = files[0];
    const fileSizeKB = (file.size / 1024).toFixed(2);

    fileInfo.textContent = `预计将为公众节省${fileSizeKB / 10} s专注力`;
    fileInfo2.textContent = `为${fileSizeKB}kb新作品提供观赏机会`;
  }
}
//
document.addEventListener("mousemove", (e) => {
  const secondElement = document.getElementById("second");
  const rect = secondElement.getBoundingClientRect();
  // 计算鼠标相对于该元素中心的位置
  const xPercent =
    ((e.clientX - rect.left - rect.width / 2) / rect.width) * 100;
  const yPercent =
    ((e.clientY - rect.top - rect.height / 2) / rect.height) * 100;
  // 设置移动系数，控制背景移动的幅度
  const moveFactor = -4; // 这个值可以根据需要进行修改
  const xOffset = xPercent * moveFactor;
  const yOffset = yPercent * moveFactor;
  // 更新背景图片的位置
  const backgroundPosition = `calc(50% + ${xOffset}px) calc(50% + ${yOffset}px)`;
  secondElement.style.backgroundPosition = backgroundPosition;
});
document.addEventListener("mousemove", (e) => {
  const container = document.querySelector(".fourthtwo");
  const image = container.querySelector("img");
  if (image) {
    const rect = container.getBoundingClientRect();
    const xPercent =
      ((e.clientX - rect.left - rect.width / 2) / rect.width) * 100;
    const moveFactor = -1; // 控制移动幅度，根据需要调整该数值
    const xOffset = xPercent * moveFactor;
    // 同时使用translateX和scale变换
    image.style.transform = `translateX(${xOffset}px) scale(1, 0.28)`;
    // 确保transform-origin与CSS设置一致
    image.style.transformOrigin = "0 0";
  }
});
