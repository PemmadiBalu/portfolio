

// Select elements
const menuCheckbox = document.getElementById("check");
const menuLinks = document.querySelectorAll(".menu-bar a");
const sections = document.querySelectorAll("section");

/* -------- MENU CLICK -------- */
menuLinks.forEach(link => {
  link.addEventListener("click", function (e) {

    // Close mobile menu
    if (menuCheckbox) {
      menuCheckbox.checked = false;
    }

    // Smooth scroll
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* -------- ACTIVE MENU ON SCROLL -------- */
window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });

});


/* -------- PARTICLES BACKGROUND -------- */
if (typeof particlesJS !== "undefined") {

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },

      color: { value: "#ffffff" },

      shape: { type: "circle" },

      opacity: { value: 0.5 },

      size: {
        value: 3,
        random: true
      },

      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },

      move: {
        enable: true,
        speed: 2,
        out_mode: "out"
      }
    },

    interactivity: {
      detect_on: "canvas",

      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      },

      modes: {
        grab: {
          distance: 140,
          line_linked: { opacity: 1 }
        },
        push: {
          particles_nb: 4
        }
      }
    },

    retina_detect: true
  });

}
