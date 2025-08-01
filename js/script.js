// ================== Outlink Layer 열기/닫기 ==================

// 요소 선택
const outlinkOpenBtn = document.querySelector(".outlink > span");
const outlinkCloseBtn = document.querySelector(".outlink-close > span");
const outlinkLayer = document.querySelector(".outlink-layer");

// '열기' 버튼 클릭 시 레이어 활성화
if (outlinkOpenBtn && outlinkLayer) {
  outlinkOpenBtn.addEventListener("click", () => {
    outlinkLayer.classList.add("active");
  });
}

// '닫기' 버튼 클릭 시 레이어 비활성화
if (outlinkCloseBtn && outlinkLayer) {
  outlinkCloseBtn.addEventListener("click", () => {
    outlinkLayer.classList.remove("active");
  });
}

// ================== 언어 메뉴 토글 ==================

// 요소 선택
const langBtn = document.querySelector(".language-inner");
const langMenu = document.querySelector(".language-dropdown");
const langArrow = document.querySelectorAll(".language-inner > span")[2];

// 언어 버튼 클릭 시 메뉴와 아이콘 회전 토글
if (langBtn && langMenu && langArrow) {
  langBtn.addEventListener("click", () => {
    langBtn.classList.toggle("active"); // 버튼 활성화
    langMenu.classList.toggle("active"); // 드롭다운 활성화
    langArrow.classList.toggle("rotated"); // 아이콘 회전(애니메이션)
  });
}

// ================== 유튜브 모달 닫기 ==================

// 요소 선택
const modalYoutube = document.getElementById("modal-youtube");
const modalYoutubeBtns = document.querySelectorAll(".youtube-btns > div");

// 각 버튼 클릭 시 유튜브 모달 숨기기
if (modalYoutube && modalYoutubeBtns.length) {
  modalYoutubeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalYoutube.style.display = "none";
    });
  });
}

// ================== 쿠키 모달 닫기 ==================

// 요소 선택
const modalCookie = document.getElementById("modal-cookie");
const modalCookieBtns = document.querySelectorAll(".cookie-footer > div");

// 각 버튼 클릭 시 쿠키 모달 숨기기
if (modalCookie && modalCookieBtns.length) {
  modalCookieBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalCookie.style.display = "none";
    });
  });
}
