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
        marginBottom: '-50%',
        opacity: 0,
        duration: 2
    });
    gsap.from(".fCard2", {
        scrollTrigger: {
            trigger: '.fCard2',
            toggleActions: "restart pause complete pause"
        },
        marginBottom: '-50%',
        opacity: 0,
        duration: 2
    });
    gsap.from(".fCard3", {
        scrollTrigger: {
            trigger: '.fCard3',
            toggleActions: "restart pause complete pause"
        },
        marginBottom: '-50%',
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
        marginTop: '1000%',
        marginBottom: '50%',
        opacity: 0,
        duration: 2
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