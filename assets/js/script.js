window.onload(trans())
function trans() {
    gsap.from(".out", {
        width: 0,
        duration: 2
    });
    gsap.from(".hero", {
        justifyContent: 'center',
        duration: 1
    });
    gsap.from(".up", {
        opacity: 0,
        duration: 2
    });
}