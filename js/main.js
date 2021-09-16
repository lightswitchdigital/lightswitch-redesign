gsap.registerPlugin(ScrollTrigger);

var hoverDistort = new hoverEffect({
    parent: document.querySelector('.elips'),
    intensity: 0.5,
    image1: './img/XgeZu2jBaVI.jpg',
    image2: './img/XgeZu2jBaVI.jpg',
    displacementImage: './img/8.png'
});

$(window).ready(         
    function () {
    anime.timeline({loop: false})
    .add({
        targets: '.title__home',
        translateX: (el, i) => [Math.pow(-1,i)*150,0],
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: (el, i) => 400 + (1000 * i),
        delay: (el, i) => 200 * (i + 1)
    })
    }
);


gsap.from(".scrollTrigger", {
    scrollTrigger: '.scrollTrigger',
    y: 200,
    opacity: 0,
    duration: 0.5, 
    ease: 'easeInOut'
});