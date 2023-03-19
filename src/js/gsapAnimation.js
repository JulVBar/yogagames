function gsapAnimation() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
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

    let itemsL = gsap.utils.toArray('.benefits__card')
			
    itemsL.forEach(item => {
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
    gsap.fromTo('.party__image', { scale: 1.2, opacity: '0'}, {
        scale: 1, opacity: 1,
        scrollTrigger: {
            trigger: '.benefits',
            start: 'center',
            end: 'canter',
            scrub: true,
            once: true
        }
    })

    gsap.fromTo('.adult', { opacity: 0, y: 100 }, {
        opacity: 1, y: 0,
        scrollTrigger: {
            trigger: '.party',
            start: 'top',
            end: 'top',
            scrub: true,
            once: true
        }
    })

    gsap.fromTo('.retreat', { opacity: 0, y: 100 }, {
        opacity: 1, y: 0,
        scrollTrigger: {
            trigger: '.adult',
            start: 'top',
            end: 'top',
            scrub: true,
            once: true
        }
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
		
			


}

export default gsapAnimation;