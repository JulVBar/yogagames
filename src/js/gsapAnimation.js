function gsapAnimation() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let scrollAnimationFunction = gsap.matchMedia();
    scrollAnimationFunction.add("(min-width: 1025px)", () => {
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
    
    
    
    
    
    // data-speed="2" data-lag="0.5"
                // gsap.fromTo('.about', { opacity: 1 }, {
                // 	opacity: 0,
                // 	scrollTrigger: {
                // 		trigger: '.hero',
                // 		start: 'top',
                // 		end: '600',
                // 		scrub: true
                // 	}
                // })
            
                
      }); // END
}

export default gsapAnimation;