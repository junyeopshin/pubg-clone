const updateSwiper = new Swiper(".main-update .swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  centeredSlides: true,

  pagination: {
    el: ".main-update .swiper-pagination-bullets",
    clickable: true,
  },

  navigation: {
    nextEl: ".main-update .swiper-button-next",
    prevEl: ".main-update .swiper-button-prev",
  },
});
