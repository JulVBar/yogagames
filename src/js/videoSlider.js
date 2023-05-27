function videoSlider() {
  var reviewSwiper = new Swiper(".review__swiper", {
    speed: 1000,
    pagination: {
      el: ".review__pagination",
      clickable: true
    },
  });

  // const videoWrappers = document.querySelectorAll('.video');

  // videoWrappers?.forEach(videoWrapper => {
  //   videoPlayer(videoWrapper);
  // });

  // function videoPlayer(videoWrapper) {
  //   let playBtn = videoWrapper?.querySelector('.video-playpause');
  //   let video = videoWrapper?.querySelector('.video-frame');

  //   video?.addEventListener('click', (e) => {
  //     // if (e.target === video) {
  //     //   playBtn.classList.toggle('hide');
  //     // }
  //     if (playBtn && video) {
  //       video.paused ? playBtn.classList.add('hide') : playBtn.classList.remove('hide');
  //     }
  //   })
  // }

  // reviewSwiper.on('slideChange', function () {
  //   videoWrappers?.forEach(videoWrapper => {
  //     let video = videoWrapper?.querySelector('.video-frame');
  //     let playBtn = videoWrapper?.querySelector('.video-playpause');
  //     video.pause();
  //     if (playBtn && video) {
  //       video?.paused ? playBtn.classList.remove('hide') : playBtn.classList.add('hide');
  //     }
  //   })
  // });
}
export default videoSlider;