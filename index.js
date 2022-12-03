console.log({ gsap });

const tl = gsap.timeline();

tl.to(".m", { duration: 2, x: 100 })
  .to(".a", { duration: 1, y: 200 })
  .to(".i", { duration: 3, rotation: 360 })
  .to(".n", { duration: 3, rotation: 360 });
