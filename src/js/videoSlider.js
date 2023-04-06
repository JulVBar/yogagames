function videoSlider() {
  var reviewSwiper = new Swiper(".review__swiper", {
    speed: 1000,
    pagination: {
      el: ".review__pagination",
      clickable: true
    },
  });

  const videos = document.querySelectorAll('.video');

  videos?.forEach(video => {
    videoPlayer(video);
  });

  function videoPlayer(video) {
    let movie = video.querySelector('video');
    let playBtn = video.querySelector('.video__playpause');

    video.addEventListener('click', () => {
      playBtn.classList.contains('paused') ? movie.pause() : movie.play();
      playBtn.classList.toggle('paused');
    })

    video.addEventListener('mouseover', () => {
      movie.setAttribute('controls', '')
    })
    video.addEventListener('mouseout', () => {
      movie.removeAttribute('controls')
    })
  }

  reviewSwiper.on('slideChange', function () {
    videos.forEach(video => {
      video.querySelector('video').pause();
      video.querySelector('.video__playpause').classList.add('paused');
    })
  });
}
export default videoSlider;