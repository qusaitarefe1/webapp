// DevOps Academy — tiny bit of real behavior: a dark-mode toggle.

(function () {
  "use strict";

  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  if (toggle) {
    toggle.addEventListener("click", function () {
      body.classList.toggle("dark");
      const isDark = body.classList.contains("dark");
      toggle.textContent = isDark ? "☀️ Toggle light mode" : "🌙 Toggle dark mode";
    });
  }

  // Read config (see config.js). We log it so students can open the
  // browser console and SEE that config.js loaded before script.js.
  if (window.SITE_CONFIG) {
    console.log("Loaded config for:", window.SITE_CONFIG.siteName);
    console.log("Theme color setting:", window.SITE_CONFIG.themeColor);
  }
})();
