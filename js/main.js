new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".slider__btn--next",
    prevEl: ".slider__btn--prev",
  },
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 400,
  slideNextClass: "swiper-slide-next",
});
