(function () {
  const themeButtons = document.querySelectorAll("[data-theme-toggle]");
  const rootElement = document.documentElement;
  const pfSearch = document.getElementById("pf-search");
  const themeStorageKey = "mmdocs_local_theme";

  let themeSwitchFrame = null;

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem(themeStorageKey);

    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const applyTheme = (theme) => {
    const isDark = theme === "dark";

    const currentAttr = rootElement.getAttribute("data-mmdocs-theme");

    if (!currentAttr && isDark) {
      rootElement.setAttribute("data-mmdocs-theme", "dark");
    }
    if (currentAttr && !isDark) {
      rootElement.removeAttribute("data-mmdocs-theme");
    }
    themeButtons.forEach((themeButton) => {
      const themeDarkIcon = themeButton.querySelector(
        "svg.jekyll-tabler-icon.ti-sun",
      );
      const themeLightIcon = themeButton.querySelector(
        "svg.jekyll-tabler-icon.ti-moon",
      );
      const themeLabel = themeButton.querySelector("span");
      const actionLabel = isDark
        ? "Switch to light mode"
        : "Switch to dark mode";

      themeButton.classList.toggle("is-active", isDark);
      themeButton.setAttribute("aria-label", actionLabel);
      themeButton.setAttribute("title", actionLabel);

      if (pfSearch) {
        const pf_attr = pfSearch.getAttribute("data-pf-theme");
        if (!pf_attr && isDark) {
          pfSearch.setAttribute("data-pf-theme", "dark");
        }
        if (pf_attr && !isDark) {
          pfSearch.removeAttribute("data-pf-theme");
        }
      }

      if (themeDarkIcon && themeLightIcon) {
        // themeIcon.className = isDark ? "ri-sun-line" : "ri-moon-line";
        if (isDark) {
          themeDarkIcon.style.display = "block";
          themeLightIcon.style.display = "none";
        } else {
          themeDarkIcon.style.display = "none";
          themeLightIcon.style.display = "block";
        }
      }

      if (themeLabel) {
        themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
      }
    });
  };

  const initialTheme = getInitialTheme();

  applyTheme(initialTheme);

  themeButtons.forEach((themeButton) => {
    themeButton.addEventListener("click", () => {
      const currentAttr = rootElement.getAttribute("data-mmdocs-theme");
      const nextTheme = currentAttr ? "light" : "dark";

      rootElement.classList.add("theme-switching");
      applyTheme(nextTheme);
      localStorage.setItem(themeStorageKey, nextTheme);

      if (themeSwitchFrame !== null) {
        cancelAnimationFrame(themeSwitchFrame);
      }

      themeSwitchFrame = requestAnimationFrame(() => {
        rootElement.classList.remove("theme-switching");
        themeSwitchFrame = null;
      });
    });
  });
})();
// Smooth scroll on anchor click
(function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        history.pushState(null, null, targetId);

        const headerOffset = 80; // Change this to your header's height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + pageYOffset - headerOffset;

        scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
})();
(function () {
  const topBtn = document.getElementById("topbtn");
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  onscroll = () => {
    topBtn.style.opacity = window.scrollY > 200 ? 1 : 0;
  };
})();

// search
(function () {
  const search = document.getElementById("search");
  const searchBtn = document.getElementById("search-btn");
  const searchClose = document.getElementById("search-close");

  /* Search show */
  if (search && searchBtn) {
    searchBtn.addEventListener("click", () => {
      search.classList.add("show-search");
    });
  }

  /* Search hidden */
  if (search && searchClose) {
    searchClose.addEventListener("click", () => {
      search.classList.remove("show-search");
    });
  }
})();
// nav menu
(function () {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  /* Menu show */
  if (navMenu && navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  /* Menu hidden */
  if (navMenu && navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
})();
