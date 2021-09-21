gsap.registerPlugin(ScrollTrigger);

var hoverDistort = new hoverEffect({
    parent: document.querySelector('.elips'),
    intensity: 0.6,
    image1: './img/XgeZu2jBaVI.jpg',
    image2: './img/XgeZu2jBaVI.jpg',
    displacementImage: './img/8.png'
});

$(window).ready(function () {
    // anime.timeline({loop: false})
    //     .add({
    //         targets: '.title__home',
    //         translateX: (el, i) => [Math.pow(-1,i)*150,0],
    //         opacity: [0,1],
    //         easing: "easeOutExpo",
    //         duration: (el, i) => 400 + (1000 * i),
    //         delay: (el, i) => 200 * (i + 1)
    //     })

    const firstRow = document.querySelector('.title__first-row .letters');
    firstRow.innerHTML = firstRow.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    const secondRow = document.querySelector('.title__second-row .letters');
    secondRow.innerHTML = secondRow.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    const thirdRow = document.querySelector('.title__third-row .letters');
    thirdRow.innerHTML = thirdRow.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    const fourthRow = document.querySelector('.title__fourth-row .letters');
    fourthRow.innerHTML = fourthRow.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
        .add({
            targets: '.letter',
            translateY: ["1.1em", 0],
            translateX: ["0.55em", 0],
            translateZ: 0,
            rotateZ: [180, 0],
            duration: 300,
            easing: "easeOutExpo",
            delay: (el, i) => 50 * i
        });


});


gsap.from(".scrollTrigger", {
    scrollTrigger: '.scrollTrigger',
    y: 200,
    opacity: 0,
    duration: 0.5, 
    ease: 'easeInOut'
});