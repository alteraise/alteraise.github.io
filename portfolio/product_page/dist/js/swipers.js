const reviewsSlider = new Swiper(".reviews__swiper", {
  speed: 400,
  slidesPerView: 1.1,
  spaceBetween: 10,
  grabCursor: true,
  updateOnWindowResize: true,
  pagination: {
    el: ".swiper-pagination",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  breakpoints: {
    1201: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 24,
    },
    490: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 12,
    },
  },
});

reviewsSlider.on("slideChange", function () {
  document.querySelector(".reviews__counter span").textContent =
    reviewsSlider.activeIndex + 1;
});
