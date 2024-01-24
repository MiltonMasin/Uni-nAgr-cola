const carrusel = document.getElementById('myCarousel');
const carruselItems = document.querySelectorAll('.carrusel img');
const itemWidth = carruselItems[0].clientWidth + 20; // Ancho de la imagen más el espacio
let currentIndex = 0;

function moveToNext() {
    currentIndex++;
    updateCarrusel();
}

function updateCarrusel() {
    const translateValue = -currentIndex * itemWidth + 'px';
    carrusel.style.transform = 'translateX(' + translateValue + ')';
    
    // Si llegamos al final del carrusel, reseteamos la posición
    if (currentIndex === carruselItems.length - 1) {
        currentIndex = 0;
        setTimeout(() => {
            carrusel.style.transition = 'none';
            translateValue = '0px';
            carrusel.style.transform = 'translateX(' + translateValue + ')';
        }, 500);
        setTimeout(() => {
            carrusel.style.transition = 'transform 0.5s ease-in-out';
        }, 550);
    }
}

setInterval(moveToNext, 3000);


// main.js

// main.js

window.addEventListener("scroll", function () {
    var navBar = document.querySelector(".navbar");
    var logoImg = navBar.querySelector(".navbar-brand img");
  
    // Cambiar el color de fondo y el logo del navbar al hacer scroll
    if (window.scrollY > 0) {
      navBar.style.transition = "background-color 0.3s ease"; // Agrega transición suave al cambio de color
      navBar.style.backgroundColor = "#ffffff"; // Cambia el fondo a blanco al hacer scroll
      logoImg.src = "images/logo2-uaa-color.png"; // Cambia la fuente de la imagen del logo al hacer scroll
      logoImg.style.maxHeight = "25px"; // Ajusta el tamaño del logo al hacer scroll
    } else {
      navBar.style.transition = "background-color 0.3s ease"; // Agrega transición suave al cambio de color
      navBar.style.backgroundColor = "transparent"; // Fondo transparente si no hay scroll
      logoImg.src = "images/logo-uaa-blanco.png"; // Restaura la fuente original del logo
      logoImg.style.maxHeight = "40px"; // Restaura el tamaño original del logo
    }
  });
  