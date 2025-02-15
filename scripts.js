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
});
