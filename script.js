const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // Loop back to the start
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the end
  updateCarousel();
});

// Adjust carousel when window resizes
window.addEventListener('resize', updateCarousel);


//  CLASS WALAAA 

// const carousel = document.querySelector('.carousel');
// const slides = document.querySelectorAll('.slide');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');

// const interval = null ; 

// let currentSlideIndex = 0 ; 
// function setSlides(){
//     slides.forEach((slide, index) => {
//         slide.style.transform = `translateX(${(index) * 100}%)` ;
//     });
// }

// function previousSlide(){
//     // currentSlideIndex++ ; 
//     currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length ; 
//     slides.forEach((slide, index)=>{
//         slide.style.transform = `translateX(${(index - currentSlideIndex)%slides.length * 100}%)` ;
//     })
// }
// function nextSlide(){
//     // currentSlideIndex-- ; 
//     currentSlideIndex = (currentSlideIndex + 1) % slides.length ; 
//     slides.forEach((slide, index)=>{
//         slide.style.transform = `translateX(${(index - currentSlideIndex)%slides.length * 100}%)` ;
//     })
// }

// function attackEventListeners(){
//     prevButton.addEventListener('click', previousSlide);
//     nextButton.addEventListener('click', nextSlide);
    
//     window.addEventListener('keydown', (event)=>{
//         if(event.key === 'ArrowLeft'){
//             previousSlide();
//         }
//         if(event.key === 'ArrowRight'){
//             nextSlide();
//         }
//     })
// }

// function startApp(){
//     setSlides() ;
//     attackEventListeners() ; 
//     interval = setInterval(nextSlide, 4000) ; 
// }

// startApp() ; 

// //  Remove onload 
// window.addEventListener('unload', () =>{
//     prevButton.removeEventListener('click', previousSlide); 
//     nextButton.removeEventListener('click', nextSlide); 
// })









