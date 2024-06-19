document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;
  
    function showSlide(n) {
      slides.forEach((slide) => slide.style.display = 'none');
      slides[n].style.display = 'block';
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }
  
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
  
    setInterval(nextSlide, 5000); // Troca de slide automática a cada 5 segundos (5000 milissegundos)
  });