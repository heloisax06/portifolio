let currentIndex = 0;

function moveCarousel(direction) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  const carousel = document.querySelector('.carousel');
  const offset = -currentIndex * 100; // move o carrossel para a esquerda (baseado em porcentagem)

  carousel.style.transform = `translateX(${offset}%)`;
}
