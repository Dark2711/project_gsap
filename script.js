const tl = gsap.timeline()
tl.from("#nav h3",{
    y:-50,
    delay:0.4,
    duration:.8,
    opacity:0,
    stagger:.3
})
tl.from("#center h1",{
    x:-500,
    delay:0.4,
    duration:.8,
    opacity:0,
    stagger:.5
})
tl.from("img",{
    x:100,
    rotate:45,
    duration:.5,
    opacity:0,
    stagger:.5
})
tl.from("#bottom h3",{
    y:-50,
    duration:.5,
    opacity:0,
    stagger:.5
})