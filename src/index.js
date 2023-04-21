
import './styles/main.scss';
import preloader from './js/preloader';
import btnToTop from './js/btn-to-top';
import burger from './js/burger';
import main from './js/main';
import smother from './gsap/ScrollSmoother.min.js';
import gsapAnimation from './js/gsapAnimation';
import videoSlider from './js/videoSlider';
import modal from './js/modal';
import form from './js/form';
import eventSlider from './js/eventSlider';


window.addEventListener('DOMContentLoaded', function() {
    preloader();
    btnToTop();
    main();
		gsapAnimation();
		burger();
		// modal();

		if (document.querySelector('.page__home')) {
			videoSlider();
		}
		
		if (document.querySelector('.page__contacts')) {
			form();
		}

		if (document.querySelector('.page__events')) {
			eventSlider();
		}

		if (ScrollTrigger.isTouch !== 1) {
			ScrollSmoother.create({
				wrapper: '.wrapper',
				content: '.page',
				smooth: 1.5,
				effects: true
			})
		}
});


const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));
const logo = importAll(require.context('./images/logo', false, /\.(png|jpe?g|svg|gif)$/));
const hero = importAll(require.context('./images/hero', false, /\.(png|jpe?g|svg|gif)$/));



function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}




