let currentSlide = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
  showSlide(currentSlide + 1);
}

setInterval(autoSlide, 3000); // Cambia cada 3 segundos

function respuestaSi() {
  alert("¡Sí! 🥰 Eres mi persona especial, y no puedo esperar a compartir cada momento contigo.");
}

function respuestaNo() {
  alert("¿Estás seguro? 💔 Sin embargo, siempre estaré aquí esperando.");
}

// Mostrar la primera imagen al cargar
showSlide(currentSlide);



