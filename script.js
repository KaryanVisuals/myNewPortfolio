function downloadResume() {
  const link = document.createElement("a");
  link.href = "resume.pdf";  // Replace with your file path
  link.download = "My_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
gsap.registerPlugin(ScrollTrigger);

const scrollContainer = document.querySelector("[data-scroll-container]");

const scroll = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true,
  lerp: 0.1
});

// 1️⃣ Integrate Locomotive Scroll with GSAP ScrollTrigger
ScrollTrigger.scrollerProxy(scrollContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: scrollContainer.style.transform ? "transform" : "fixed"
});

// 2️⃣ Update ScrollTrigger on Locomotive scroll
scroll.on("scroll", ScrollTrigger.update);

// 3️⃣ Refresh ScrollTrigger after everything is ready
ScrollTrigger.addEventListener("refresh", () => scroll.update());

ScrollTrigger.refresh();

window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
    gsap.to(".marquee", {
      transform: "translateX(-200%)",
      duration: 4,
      repeat: -1,
      ease: "none"
    })
    gsap.to(".marquee img", {
      rotate: 180
    })
  } else {
    gsap.to(".marquee", {
      transform: "translateX(0%)",
      duration: 4,
      repeat: -1,
      ease: "none"
    })
    gsap.to(".marquee img", {
      rotate: 0
    })
  }
})
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".project-section",
     scroller: "[data-scroll-container]",
    start: "28% 50%",
    end: "100% 50%",
    scrub: 2,
    // markers: true
  }
});
tl.to("#project-part", {
  top: "22%",
}, 'a')
tl.to("#project-part1", {
  top: "100%",
}, 'a')
tl.to("#project-part1", {
  top: "30%",
}, 'b')
tl.to("#project-part", {
  width: "65%",
  height: "65vh",
}, 'b')
tl.to("#project-part2", {
  top: "100%",
}, 'b')
tl.to("#project-part2", {
  top: "38%",
}, 'c')
tl.to("#project-part2", {
  width: "70%",
  height: "70vh",
}, 'c')

