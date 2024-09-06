let slideIndex = 0;
let slides = document.getElementsByClassName('slide');
let dots = document.getElementsByClassName('dot');
let autoSlideInterval;

function showSlides(n) {
    if (n >= slides.length) { 
        slideIndex = 0; 
    }
    if (n < 0) { 
        slideIndex = slides.length - 1; 
    }
    let slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides(slideIndex);
}

function autoSlide() {
    nextSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

showSlides(slideIndex);
startAutoSlide();

let sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', stopAutoSlide);
sliderContainer.addEventListener('mouseleave', startAutoSlide);

let startX = 0;
let moveX = 0;

sliderContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchmove', (e) => {
    moveX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchend', () => {
    if (startX - moveX > 50) {
        nextSlide();
    } else if (startX - moveX < -50) {
        prevSlide(); 
    }
});
