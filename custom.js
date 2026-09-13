(function () {
  "use strict";

  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  const themeTransition = document.querySelector(".theme-transition");
  const storedTheme = localStorage.getItem("portfolio-theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let themeSwapTimer;
  let themeCleanupTimer;

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
    themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
    document.querySelector('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#08111f" : "#f4f7fb");
  }

  setTheme(storedTheme || preferredTheme);

  themeToggle.addEventListener("click", function () {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

    if (reducedMotion) {
      setTheme(nextTheme);
      return;
    }

    window.clearTimeout(themeSwapTimer);
    window.clearTimeout(themeCleanupTimer);
    themeTransition.className = "theme-transition";
    void themeTransition.offsetWidth;
    themeTransition.classList.add(nextTheme === "light" ? "to-light" : "to-dark");
    themeToggle.classList.add("is-switching");
    themeToggle.disabled = true;

    themeSwapTimer = window.setTimeout(function () {
      setTheme(nextTheme);
    }, 430);

    themeCleanupTimer = window.setTimeout(function () {
      themeTransition.className = "theme-transition";
      themeToggle.classList.remove("is-switching");
      themeToggle.disabled = false;
    }, 1100);
  });

  menuToggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }, { passive: true });

  if (reducedMotion || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (element) {
      element.classList.add("is-visible");
    });
  } else {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(function (element) {
      observer.observe(element);
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
