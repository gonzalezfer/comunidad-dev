// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const groupsCount = document.getElementById("groups-count");
  const usersCount = document.getElementById("users-count");

  const animateCount = (element, target) => {
    let count = 0;
    const increment = Math.ceil(target / 100);

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      element.textContent = count;
    }, 30);
  };

  // Inicia las animaciones de conteo
  animateCount(groupsCount, 35); // Cantidad de grupos
  animateCount(usersCount, 1047); // Cantidad de usuarios

  // TEMA OSCURO Y CLARO
  const themeToggle = document.getElementById("theme-button");
  const html = document.documentElement;

  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  html.setAttribute("data-theme", savedTheme);

  themeToggle.addEventListener("click", () => {
    const newTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

});
