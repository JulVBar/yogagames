function preloader() {
    document.body.onload = function() {
        // document.body.style.overflow = 'hidden';
        setTimeout(function() {
            // let preloader = document.querySelector('.preloader');
    
            // if (preloader && !preloader.classList.contains('done')) {
            //     preloader.classList.add('done');
            //     document.body.style.overflow = '';
            // }

            const animatedElems = document.querySelectorAll('[data-animation]');
            
            if (animatedElems && animatedElems?.length > 0) {
                if (window.pageYOffset === 0) {
                    animatedElems.forEach(item=>item.classList.add('start-animation'));
                }
            }
        }, 0);
    };
    
}

export default preloader;