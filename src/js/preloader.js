function preloader() {
    document.body.onload = function() {
        
        setTimeout(function() {
            let preloader = document.querySelector('.preloader');
            if (preloader && !preloader.classList.contains('done')) {
                preloader.classList.add('done');

                // Animation setting
                const animatedElems = document.querySelectorAll('[data-animation]');
            
                if (animatedElems && animatedElems?.length > 0) {
                    animatedElems.forEach(item=>item.classList.add('start-animation'));
                }

                // LIST page animations
                const listItems = document.querySelectorAll('[data-list]');
                if (listItems?.length > 0) {
                    for (let i = 0; i < listItems.length; i++) {
                        listItems[i].style.animationDelay = i/10 + 's';
                        listItems[i].classList.add('start-animation');
                    }
                }

                const sheduleItems = document.querySelectorAll('.shedule__item');
                if (sheduleItems?.length > 0) {
                    for (let i = 0; i < sheduleItems.length; i++) {
                        sheduleItems[i].style.animationDelay = i/3 + 's';
                        sheduleItems[i].classList.add('start-animation');
                    }
                }
            }
        }, 0);
    };
}

export default preloader;