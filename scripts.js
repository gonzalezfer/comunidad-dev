// Configuración del contador
const launchDate = new Date('2025-02-15T11:30:00').getTime();

// Función para actualizar el contador
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  // Cálculos de días, horas, minutos y segundos
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Mostrar resultados en el DOM
  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

  // Detener el contador si ya pasó el lanzamiento
  if (timeLeft < 0) {
    clearInterval(timer);
    document.getElementById('countdown').innerHTML = '<p>¡El lanzamiento ya está aquí!</p>';
  }
}

// Actualizar el contador cada segundo
const timer = setInterval(updateCountdown, 1000);
