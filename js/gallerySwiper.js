const gallerySwiper = new Swiper(".gallery-pc-slide .swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  centeredSlides: true,
  autoplay: { delay: 4000 },

  pagination: {
    el: ".gallery-pc-slide .swiper-pagination-bullets",
    clickable: true,
  },

  navigation: {
    nextEl: ".gallery-pc-slide .swiper-button-next",
    prevEl: ".gallery-pc-slide .swiper-button-prev",
  },
});
