const openBtn = document.querySelector(".outlink span");
const closeBtn = document.querySelector(".outlink-close span");
const outlinkLayer = document.querySelector(".outlink-layer");
const lanBtn = document.querySelector(".language-inner");
const lanMenu = document.querySelector(".language-dropdown");
const thirdSpan = document.querySelectorAll(".language-inner > span")[2];

if (openBtn && outlinkLayer) {
  openBtn.addEventListener("click", () => {
    outlinkLayer.classList.add("active");
  });
}
if (closeBtn && outlinkLayer) {
  closeBtn.addEventListener("click", () => {
    outlinkLayer.classList.remove("active");
  });
}
lanBtn.addEventListener("click", () => {
  // .active 클래스 토글 (있으면 제거, 없으면 추가)
  lanBtn.classList.toggle("active");
  lanMenu.classList.toggle("active");

  // 180도 회전 토글을 위해 클래스 토글
  // CSS에서 회전 효과는 이 클래스에 적용하도록 함
  if (thirdSpan) {
    thirdSpan.classList.toggle("rotated");
  }
});
