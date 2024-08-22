// script.js

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const slides = document.querySelectorAll('.carousel-slide');

let index = 0;

function showSlide(index) {
    const offset = -index * 100; // Largura da imagem em porcentagem
    carouselWrapper.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : slides.length - 1;
    showSlide(index);
});

nextButton.addEventListener('click', () => {
    index = (index < slides.length - 1) ? index + 1 : 0;
    showSlide(index);
});

// Inicializar
showSlide(index);