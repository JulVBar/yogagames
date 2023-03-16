
import './styles/main.scss';
import preloader from './js/preloader';
import btnToTop from './js/btn-to-top';
import main from './js/main';


window.addEventListener('DOMContentLoaded', function() {
    preloader();
    btnToTop();
    main();
    
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

