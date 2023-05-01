function gsapAnimation() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let scrollAnimationFunction = gsap.matchMedia();
    scrollAnimationFunction.add("(min-width: 1025px)", () => {
        
        if (document.querySelector('.page__home')) {
			gsap.fromTo('.about__text-mark', { width: 0}, {
                width: '120%',
                scrollTrigger: {
                    trigger: '.about',
                    start: '-200',
                    end: '-200',
                    scrub: true,
                    once: true
                }
            })
            gsap.fromTo('.about__text-colored', { color: '#303030'}, {
                color: '#6B66DA',
                scrollTrigger: {
                    trigger: '.about',
                    start: '-200',
                    end: '-200',
                    scrub: true,
                    once: true
                }
            })
            let aboutImages = gsap.utils.toArray('.about__image img')
            aboutImages.forEach(item => {
                gsap.fromTo(item, { width: 0 }, {
                    width: '100%',
                    scrollTrigger: {
                        trigger: '.about',
                        start: 'top center',
                        end: 'top center',
                        scrub: true,
                        once: true
                    }
                })
            })
            let benefitsCards = gsap.utils.toArray('.benefits__card')
            benefitsCards.forEach(item => {
                gsap.fromTo(item, { opacity: 0, y: 500 }, {
                    opacity: 1, y: 0,
                    scrollTrigger: {
                        trigger: '.about',
                        start: '-200',
                        end: '300',
                        scrub: true
                    }
                })
            })
            gsap.fromTo('.party', { border: 'none'}, {
                border: '2px solid #FF7EAA',
                scrollTrigger: {
                    trigger: '.benefits',
                    start: 'top',
                    end: 'canter',
                    scrub: true,
                    once: true
                }
            })
            gsap.fromTo('.party', { background: 'transparent'}, {
                background: '#FF7EAA',
                scrollTrigger: {
                    trigger: '.benefits',
                    start: 'center',
                    end: 'canter',
                    scrub: true,
                    once: true
                }
            })
            gsap.fromTo('.party__content-button', { opacity: '0'}, {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.benefits',
                    start: 'center',
                    end: 'canter',
                    scrub: true,
                    once: true
                }
            })
            gsap.fromTo('.party__image', { scale: 0.6, opacity: '0'}, {
                scale: 1, opacity: 1,
                scrollTrigger: {
                    trigger: '.benefits',
                    start: 'center',
                    end: 'canter',
                    scrub: true,
                    once: true
                }
            })
            gsap.fromTo('.party__title', { color: '#fcfbfa', opacity: '0'}, {
                color: 'white', opacity: 1,
                scrollTrigger: {
                    trigger: '.benefits',
                    start: 'center',
                    end: 'canter',
                    scrub: true,
                    once: true
                }
            })
            gsap.fromTo('.party__text', { color: '#fcfbfa', opacity: '0'}, {
                color: 'white', opacity: 1,
                scrollTrigger: {
                    trigger: '.benefits',
                    start: 'center',
                    end: 'canter',
                    scrub: true,
                    once: true
                }
            })
            gsap.fromTo('.adult__image-wrapper', { scale: 1.1, opacity: 0}, {
                scale: 1, opacity: 1,
                scrollTrigger: {
                    trigger: '.adult',
                    start: 'top center',
                    end: 'top center',
                    scrub: true,
                    once: true
                }
            })
            gsap.fromTo('.adult__inner', { opacity: 0}, {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.adult',
                    start: 'top center',
                    end: 'top center',
                    scrub: true,
                    once: true
                }
            })
            gsap.fromTo('.retreat__image-wrapper', { scale: 1.1, opacity: 0}, {
                scale: 1, opacity: 1,
                scrollTrigger: {
                    trigger: '.retreat',
                    start: 'top center',
                    end: 'top center',
                    scrub: true,
                    once: true
                }
            })
            gsap.fromTo('.retreat__inner', { opacity: 0}, {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.retreat',
                    start: 'top center',
                    end: 'top center',
                    scrub: true,
                    once: true
                }
            })
            gsap.fromTo('.review__circle-bg', { y: '50%'}, {
                y: '-100%',
                scrollTrigger: {
                    trigger: '.review',
                    start: '-700',
                    end: 'bottom -50%',
                    scrub: true,
                }
            })
            let animBoxes = gsap.utils.toArray('.animated-inner')
            animBoxes.forEach(item => {
                gsap.fromTo(item, { y: '150%' }, {
                    y: '0',
                    scrollTrigger: {
                        trigger: item,
                        start: '-500',
                        end: '-500',
                        scrub: true,
                        once: true
                    }
                })
            })
		}
        
        if (document.querySelector('.page__adults')) {
            const adultBlocks = document.querySelectorAll('.adults__block');
            const indexes = [1, 2, 5, 6, 9, 10, 13, 14, 17, 18, 21, 22];
            adultBlocks.forEach((item, i)=> {
                if (indexes.includes(i)) {
                    item.classList.add('gsap-right');
                    item.setAttribute('data-speed', '1.1');
                } else {
                    item.classList.add('gsap-left');
                    item.setAttribute('data-speed', '.9');
                }
            })
            let itemsL = gsap.utils.toArray('.gsap-left');
            itemsL.forEach(item => {
                gsap.fromTo(item, { opacity: 0, x: -50 }, {
                    opacity: 1, x: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: '-750',
                        end: '-100',
                        scrub: true
                    }
                })
            })
            let itemsR = gsap.utils.toArray('.gsap-right')
            itemsR.forEach(item => {
                gsap.fromTo(item, { opacity: 0, x: 50 }, {
                    opacity: 1, x: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: '-550',
                        end: 'top',
                        scrub: true
                    }
                })
            })
            gsap.fromTo('.adults__section-hero', { opacity: 1 }, {
                opacity: 0,
                scrollTrigger: {
                    trigger: '.adults__section-hero',
                    start: 'center',
                    end: '450',
                    scrub: true
                }
            })
        }
        
        if (document.querySelector('.page__galery')) {
            const galeryBlocks = document.querySelectorAll('.galery-grid__wrapper');
            galeryBlocks.forEach((item, i)=> {
                if (i % 2 == 0) {
                    item.classList.add('galery-grid__wrapper-left');
                    item.setAttribute('data-speed', '1.1');
                } else {
                    item.classList.add('galery-grid__wrapper-right');
                    item.setAttribute('data-speed', '.9');
                }
            })
            let photosL = gsap.utils.toArray('.galery-grid__wrapper-left .galery-grid__image');
            photosL.forEach(item => {
                gsap.fromTo(item, { opacity: 0, x: -50 }, {
                    opacity: 1, x: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: '-750',
                        end: '-100',
                        scrub: true
                    }
                })
            })
            let photosR = gsap.utils.toArray('.galery-grid__wrapper-right .galery-grid__image')
            photosR.forEach(item => {
                gsap.fromTo(item, { opacity: 0, x: 50 }, {
                    opacity: 1, x: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: '-550',
                        end: '-100',
                        scrub: true
                    }
                })
            })
            gsap.fromTo('.galery-header__image', { opacity: 1 }, {
                opacity: 0,
                scrollTrigger: {
                    trigger: '.galery-header',
                    start: 'center',
                    end: '450',
                    scrub: true
                }
            })
        }
        
        if (document.querySelector('.page__program')) {
            gsap.fromTo('.about-space__img-anim', { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                scrollTrigger: {
                    trigger: '.about-space',
                    start: '-450',
                    end: '-450',
                    scrub: true,
                    once: true,
                }
            })
            gsap.fromTo('.about-space__text-anim', { y: '50%', opacity: 0 }, {
                y: 0, opacity: 1,
                scrollTrigger: {
                    trigger: '.about-space',
                    start: '-450',
                    end: '-450',
                    scrub: true,
                    once: true,
                }
            })
            gsap.fromTo('.about-class__img-anim', { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                scrollTrigger: {
                    trigger: '.about-class',
                    start: '-450',
                    end: '-450',
                    scrub: true,
                    once: true,
                }
            })
            gsap.fromTo('.about-class__text-anim', { y: '50%', opacity: 0 }, {
                y: 0, opacity: 1,
                scrollTrigger: {
                    trigger: '.about-class',
                    start: '-450',
                    end: '-450',
                    scrub: true,
                    once: true,
                }
            })
        }
    

            
                
      }); // END
}

export default gsapAnimation;