console.log('hello world')

gsap.to("#box1", {
  x: 700,
  rotation: 360,
  scale: 0.5,
  duration: 2,
  backgroundColor: "red"
});

gsap.registerPlugin(TextPlugin);

gsap.to("#text", {
    duration: 2,
    text: "Zahin al Mahmud",
    ease: "none",
});

gsap.registerPlugin(TextPlugin);

gsap.to("#text1", {
    duration: 2,
    text: "I am software engineer",
    ease: "none",
    delay:1
});

gsap.to("#text3 h3",{
    y:50,
    duration:1,
    delay:1,
    stagger:0.1,
    repeat:3,
    opacity:0,
    x:100,
    scale:0.5,
    repeat: -1,
})

// gsap.to("#text3 h3", {
//     duration: 1,
//     stagger: 1,
//     y: 50,
//     opacity: 0,
//     scale: 1.5,
//     rotation: 360,
//     backgroundColor: "blue",
//     repeat: -1,
//     yoyo: true,
//     ease: "power2.inOut"
// });
