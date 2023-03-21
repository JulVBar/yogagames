
import './styles/main.scss';
import preloader from './js/preloader';
import btnToTop from './js/btn-to-top';
import main from './js/main';
import smother from './gsap/ScrollSmoother.min.js';
import gsapAnimation from './js/gsapAnimation';
import videoSlider from './js/videoSlider';



window.addEventListener('DOMContentLoaded', function() {
    preloader();
    btnToTop();
    main();
		gsapAnimation();
		videoSlider();

		if (ScrollTrigger.isTouch !== 1) {
			ScrollSmoother.create({
				wrapper: '.wrapper',
				content: '.page',
				smooth: 1.5,
				effects: true
			})
		}
});

// load all images
//каждую подпапку импортируем отдельно (иконки просто копируются в конфиге)
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));
const logo = importAll(require.context('./images/logo', false, /\.(png|jpe?g|svg|gif)$/));
const hero = importAll(require.context('./images/hero', false, /\.(png|jpe?g|svg|gif)$/));



function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}




