function preloader() {
    document.body.onload = function() {
        
        setTimeout(function() {
            let preloader = document.querySelector('.preloader');
            if (preloader && !preloader.classList.contains('done')) {
                preloader.classList.add('done');
                const pageScrollPosition = window.pageYOffset;
                
                // Animation setting
                if (pageScrollPosition === 0) {
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
    
                    // Events animation
                    const eventsBlocks = document.querySelectorAll('.events-fade-anim');
                    if (eventsBlocks?.length > 0) {
                        for (let i = 0; i < eventsBlocks.length; i++) {
                            eventsBlocks[i].style.animationDelay = (i + 1)/3 + 's';
                            eventsBlocks[i].classList.add('start-animation');
                        }
                    }
                    const eventsText = document.querySelectorAll('.events-slide-anim');
                    if (eventsText?.length > 0) {
                        for (let i = 0; i < eventsText.length; i++) {
                            eventsText[i].style.animationDelay = (i + 1.5)/3 + 's';
                            eventsText[i].classList.add('start-animation');
                        }
                    }
                }
                
            }
        }, 0);
    };
}

export default preloader;