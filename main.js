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


