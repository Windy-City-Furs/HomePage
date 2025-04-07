document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);
  setInterval(nextSlide, 5000); // 5 seconds
});
