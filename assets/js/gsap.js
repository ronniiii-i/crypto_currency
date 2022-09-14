gsap.registerPlugin(ScrollTrigger);


window.onload = () => trans()
function trans() {
    gsap.from(".hero--image *", {
        scrollTrigger: {
            trigger: '.hero--image',
            toggleActions: "restart pause complete pause"
        },
        width: '10%',
        duration: 2.5
    });
    gsap.from(".hero--text *", {
        scrollTrigger: {
            trigger: '.hero--text',
            toggleActions: "restart pause complete pause"
        },
        marginBottom: '-50%',
        opacity: 0,
        duration: 2
    });
    gsap.from(".fCard1", {
        scrollTrigger: {
            trigger: '.fCard1',
            toggleActions: "restart pause complete pause"
        },
        marginBottom: '-5%',
        opacity: 0,
        duration: 2
    });
    gsap.from(".fCard2", {
        scrollTrigger: {
            trigger: '.fCard2',
            toggleActions: "restart pause complete pause"
        },
        marginBottom: '-15%',
        opacity: 0,
        duration: 2
    });
    gsap.from(".fCard3", {
        scrollTrigger: {
            trigger: '.fCard3',
            toggleActions: "restart pause complete pause"
        },
        marginBottom: '-25%',
        opacity: 0,
        duration: 2
    });
    gsap.from(".why--image *", {
        scrollTrigger: {
            trigger: '.why--image',
            toggleActions: "restart pause complete pause"
        },
        width: '10%',
        duration: 2.5
    });
    gsap.from(".why--text *", {
        scrollTrigger: {
            trigger: '.why--text',
            toggleActions: "restart pause complete pause"
        },
        marginTop: '20%',
        marginBottom: '50%',
        opacity: 0,
        duration: 2
    });
    gsap.from(".cRise", {
        scrollTrigger: {
            trigger: '.cRise',
            toggleActions: "restart pause complete pause"
        },
        marginBottom: '3vw',
        opacity: 0,
        duration: 2
    });
    gsap.from(".cOut", {
        scrollTrigger: {
            trigger: '.cOut',
            toggleActions: "restart pause complete pause"
        },
        opacity: 0,
        // marginTop: '15%',
        marginBottom: '-10%',
        duration: 2.5
    });
    gsap.from(".cOut *", {
        scrollTrigger: {
            trigger: '.cOut',
            toggleActions: "restart pause complete pause"
        },
        height: '1vh',
        fontSize: '.1rem',
        width: '1vw',
        duration: 2.5
    });
    gsap.from(".cuOut", {
        scrollTrigger: {
            trigger: '.cuOut',
            toggleActions: "restart pause complete pause"
        },
        width: '10%',
        fontSize: '.1rem',
        duration: 2.5
    });
    gsap.from(".fOut", {
        scrollTrigger: {
            trigger: '.fOut',
            toggleActions: "restart pause complete pause"
        },
        width: '10%',
        fontSize: '.1rem',
        marginBottom: '10%',
        duration: 2.5
    });
    gsap.from(".fText", {
        scrollTrigger: {
            trigger: '.fText',
            toggleActions: "restart pause complete pause"
        },
        marginBottom: '-5%',
        paddingBottom: '10%',
        opacity: 0,
        duration: 2
    });
    gsap.from(".fText1", {
        scrollTrigger: {
            trigger: '.fText1',
            toggleActions: "restart pause complete pause"
        },
        marginBottom: '-5%',
        paddingBottom: '10%',
        opacity: 0,
        duration: 2
    });
    gsap.from(".fText2", {
        scrollTrigger: {
            trigger: '.fText2',
            toggleActions: "restart pause complete pause"
        },
        marginBottom: '-5%',
        paddingBottom: '10%',
        opacity: 0,
        duration: 2
    });
    gsap.from(".fImage *", {
        scrollTrigger: {
            trigger: '.fImage',
            toggleActions: "restart pause complete pause"
        },
        width: '10%',
        marginBottom: '30%',
        opacity: 0,
        duration: 2.5
    });
    gsap.from(".fImage1 *", {
        scrollTrigger: {
            trigger: '.fImage1',
            toggleActions: "restart pause complete pause"
        },
        width: '10%',
        opacity: 0,
        marginBottom: '20%',
        duration: 2.5
    });
    gsap.from(".fImage2 *", {
        scrollTrigger: {
            trigger: '.fImage2',
            toggleActions: "restart pause complete pause"
        },
        width: '10%',
        marginBottom: '20%',
        opacity: 0,
        duration: 2.5
    });
    gsap.from(".ctOut", {
        scrollTrigger: {
            trigger: '.ctOut',
            toggleActions: "restart pause complete pause"
        },
        // marginTop: '-20%',
        opacity: 0,
        duration: 2.5
    });
    gsap.from(".ctOut *", {
        scrollTrigger: {
            trigger: '.ctOut',
            toggleActions: "restart pause complete pause"
        },
        height: '10%',
        fontSize: '.1rem',
        width: '10%',
        margin: 'auto',
        duration: 2.5
    });
}
// gsap.from(".hero--image", {
//     scrollTrigger: {
//         trigger: '.hero--image',
//         toggleActions: "restart pause complete pause"
//     },
//     duration: 2
// });
    // gsap.from(".hero--text", {
    //     scrollTrigger: {
    //         trigger: '.hero--text',
    //         toggleActions: "restart pause complete pause"
    //     },
    //     position: 'relative',
    //     duration: 2
    // });