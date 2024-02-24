let tl =gsap.timeline();

tl.set("h1", { opacity: 0, display: "block" });

tl.from("img",{
    opacity:0,
    rotate:0,
    duration:1,
    stagger:.5  
})

tl.from("h1",{
    opacity:1,
    duration:.5,
    marginTop:50
})

tl.from("h3",{
    opacity:0,
    duration:2
})