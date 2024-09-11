
//image slider

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);
 
function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        //intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    //clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}


/*
//menu icon
function myFunction(x) {
    x.classList.toggle("change");
}


// Get elements
const slider = document.getElementById('slider');
const triggerImage = document.getElementById('trigger-image');
const closeSlider = document.getElementById('close-slider');
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Function to show the slider
function showSlider() {
    slider.classList.remove('hidden');
    slider.classList.add('visible');
    showSlide(currentSlide);
}

// Function to hide the slider
function hideSlider() {
    slider.classList.remove('visible');
    setTimeout(() => slider.classList.add('hidden'), 500); // Wait for fade-out before hiding
}

// Function to change slides
function changeSlide(n) {
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Function to display the current slide
function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.style.display = index === n ? 'block' : 'none';
    });
}

// Event listeners
triggerImage.addEventListener('click', showSlider);
closeSlider.addEventListener('click', hideSlider);

// Initialize the slider by hiding all slides except the first
showSlide(currentSlide);
*/



