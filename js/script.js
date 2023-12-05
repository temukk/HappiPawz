document.querySelector('.menu-button').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
  });

  
const slider = document.querySelector(".slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let slideIndex = 0;

nextBtn.addEventListener("click", () => {
    slideIndex++;
    showSlide();
});

prevBtn.addEventListener("click", () => {
    slideIndex--;
    showSlide();
});

function showSlide() {
    const slides = document.querySelectorAll(".slider .slide");
    if (slideIndex < 0) slideIndex = slides.length - 4;
    if (slideIndex >= slides.length - 3) {
        slideIndex = 0;
    }

    const translateX = slideIndex * -25;
    slider.style.transform = `translateX(${translateX}%)`;
}

showSlide();
