document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in-section");
  if ("IntersectionObserver" in window) {
    const appearOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  } else {
    faders.forEach((fader) => fader.classList.add("is-visible"));
  }

  const sections = document.querySelectorAll("section[id], footer[id]");
  const navLinks = document.querySelectorAll("nav a");

  const updateActiveNav = () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id") || "";
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (current && link.getAttribute("href")?.includes(current)) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();
});
