// header 제어
const header = document.querySelector(".header");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // 스크롤 다운하면 헤더 숨기기
    header.style.transform = "translateY(-100%)";
  } else {
    // 스크롤 업하면 헤더 보이기
    header.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 음수 방지
});

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

// ================== 오른쪽 사이드 배너 제어 ==================
const rightSb = document.querySelector(".right-side-banner");
const rightSbBtn = rightSb.querySelector(".btn-hide");

// 유튜브 버튼 클릭 시 오른쪽 배너 나타내기
modalYoutubeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    rightSb.classList.remove("hide");
    rightSb.style.display = "block"; // display:none -> block 변경
    setTimeout(() => {
      rightSb.classList.add("show"); // show 클래스 추가해 슬라이드 인 애니메이션
    }, 10);
  });
});

// 오른쪽 배너 숨기기 버튼 클릭 시 슬라이드 아웃 후 숨기기
rightSbBtn.addEventListener("click", () => {
  rightSb.classList.remove("show");
  rightSb.classList.add("hide");

  rightSb.addEventListener(
    "transitionend",
    () => {
      rightSb.style.display = "none"; // 트랜지션 끝난 후 완전 숨기기
      rightSb.classList.remove("hide"); // 초기 상태로 리셋
    },
    { once: true }
  );
});

const dropdown = document.querySelector(".main-dropdown");
const submenu = document.querySelector(".main-dropdown-submenu");
const arrowIcon = document.querySelector(".dropdown-selected-item .icon-arrow");

dropdown.addEventListener("click", () => {
  const isDisplayed = submenu.style.display === "block";
  // 토글 서브메뉴 보여짐 여부
  submenu.style.display = isDisplayed ? "none" : "block";

  // 토글 화살표 회전 스타일
  if (isDisplayed) {
    arrowIcon.style.transform = ""; // 원래 상태로 돌리기
  } else {
    arrowIcon.style.transform = "translateY(-50%) rotate(-180deg)";
  }
});
