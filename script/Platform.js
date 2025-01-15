gsap.from(".nav ul div", {
  y: -20,
  opacity: 0,
  stagger: 0.1,
  filter: "blur(10px)",
});

gsap.from(".animate1", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
  filter: "blur(10px)",
});

gsap.from(".animate2", {
  opacity: 0,
  scale: 0.5,
  duration: 0.8,
  filter: "blur(10px)",
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
