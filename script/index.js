const observer = new IntersectionObserver((element) => {
  element.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

document.querySelectorAll(".hide").forEach((element) => {
  observer.observe(element);
});

gsap.from(".nav ul div", {
  y: -20,
  opacity: 0,
  stagger: 0.3,
  filter: "blur(10px)",
});

gsap.set(".right1", { rotate: 45 }); // Set initial rotation for consistency
gsap.from(".right1", {
  x: 1000,
  duration: 2,
  borderRadius: 200,
  rotate: 360, // Animate from this rotation
});

gsap.set(".left1", { rotate: 90 }); // Set initial rotation for consistency
gsap.from(".left1", {
  x: -1000,
  duration: 2,
  borderRadius: 200,
  rotate: 360,
  delay: 0.3,
});

gsap.set(".right2", { rotate: 45 });
gsap.from(".right2", {
  x: 1000,
  duration: 2,
  borderRadius: 200,
  rotate: 360,
  delay: 0.6,
});

gsap.set(".left2", { rotate: 90 });
gsap.from(".left2", {
  x: -1000,
  duration: 2,
  borderRadius: 200,
  rotate: 360,
  delay: 0.9,
});

gsap.set(".right3", { rotate: 45 });
gsap.from(".right3", {
  x: 1000,
  duration: 2,
  borderRadius: 200,
  rotate: 360,
  delay: 1.2,
});

gsap.set(".page2backgroundDiv", { rotate: 45 });
gsap.from(".page2backgroundDiv", {
  x: -1000,
  duration: 2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".page2",
    scroll: "body",
    start: "top 80%",
  },
});

gsap.from(".page4container", {
  opacity: 0,
  scale: 0,
  filter: "blur(50px)", // Fixed typo
  borderRadius: "50%",

  scrollTrigger: {
    trigger: ".page4Ref",
    start: "top bottom", // Adjusted
    end: "top 60%", // Adjusted
    scrub: 1,
  },
});

gsap.from(".contactUsFixedDiv", {
  x: 400,
  duration: 2,
  scrollTrigger: {
    trigger: ".page2",
    start: "top 0%",
    scrub: 1,
  },
});

handleCloseButtonclick = () => {
  const button = document.querySelector(".navSideBar");
  button.style.display = "none";
  const sidebarButton = document.querySelector(".ri-menu-line");
  sidebarButton.style.display = "initial";
};

handlesidebarButton = () => {
  const button = document.querySelector(".navSideBar");
  button.style.display = "initial";
  const sidebarButton = document.querySelector(".ri-menu-line");
  sidebarButton.style.display = "none";
};

function sendToWhatsApp() {
  const whatsappMessage = `Hi!`;

  const whatsappUrl = `https://wa.me/${918824458774}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  window.open(whatsappUrl, "_blank");
}
