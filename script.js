const timeline = gsap.timeline();
timeline.from(".text",{
    duration: 1.8,
    delay: .5,
    opacity: 0,
    ease: "power4.out",
    x: 150,
    skewX: 20,
    stagger:{
        amount: .4
    }
});
timeline.from(".logo, .menu",{
    duration: .6,
    y: 100,
    stagger:{
        amount: .4
    }
},"-=.3");
timeline.from(".pic1",{
    duration: 1,
    position: "absolute",
    top: "100%",
    left: "50%",
    ease: "power2.out",
    x: "-50%",
    y: "-50%",
    filter: "grayscale(1)"
});
timeline.from(".pic2",{
    duration: 1.5,
    position: "absolute",
    top: "100%",
    left: "50%",
    ease: "power2.out",
    x: "-50%",
    y: "-50%",
    filter: "grayscale(1)"
},"-=.5");
timeline.from(".pic3",{
    duration: 1.5,
    position: "absolute",
    top: "100%",
    left: "50%",
    ease: "power2.out",
    x: "-50%",
    y: "-50%",
    filter: "grayscale(1)"
},"-=.5");
timeline.from(".pic4",{
    duration: 1.5,
    position: "absolute",
    top: "100%",
    left: "50%",
    ease: "power2.out",
    x: "-50%",
    y: "-50%",
    filter: "grayscale(1)"
},"-=.5");

timeline.from(".circle1, .circle2",{
    duration: .8,
    height: 0,
    width: 0,
    ease: "power4.out",
    stagger: {
        amount: .8
    }
},"-=.5");