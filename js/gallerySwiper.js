const galleryPcSwiper = new Swiper(".gallery-pc-slide .swiper", {
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

const galleryMbSwiper = new Swiper(".gallery-mb-slide .swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  loopedSlides: 7,
  autoplay: { delay: 4000 },

  pagination: {
    el: ".gallery-mb-slide .swiper-pagination-bullets",
    clickable: true,
  },

  navigation: {
    nextEl: ".gallery-mb-slide .swiper-button-next",
    prevEl: ".gallery-mb-slide .swiper-button-prev",
  },
});
