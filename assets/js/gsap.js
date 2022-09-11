gsap.registerPlugin(ScrollTrigger);

window.onload(trans())
function trans() {
    gsap.from(".out", {
        scrollTrigger: {
            trigger: '.test',
            toggleActions: "restart pause reverse pause"
        },
        // marginTop: '-50%',
        marginRight: '-50%',
        width: 0,
        duration: 3
    });
    // gsap.from(".hero", {
    //     justifyContent: 'center',
    //     duration: 3
    // });
    gsap.from(".up", {
        opacity: 0,
        duration: 3
    });
}