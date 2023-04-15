function eventSlider() {
  var eventSwiper = new Swiper(".single-event__swiper", {
    speed: 800,
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".single-event__swiper-btn-next",
      prevEl: ".single-event__swiper-btn-prev",
    },
  });
}
export default eventSlider;