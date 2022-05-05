const nextBtn = document.querySelector(".next")
const img = document.querySelector("img")
const slides = document.querySelectorAll(".slide")
const prevBtn = document.querySelector(".prev")

let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
});

prevBtn.style.display = " none"

nextBtn.addEventListener("click", moveCarouselForward)

prevBtn.addEventListener("click", moveCarouselDownward)


function moveCarouselForward(){
    counter ++
    carouselMover()
}

function moveCarouselDownward(){
    counter --
    carouselMover()
}

function carouselMover(){
    if(counter > 0){
        prevBtn.style.display = "inline"
    }
    if(counter === slides.length - 1){
        nextBtn.style.display = "none"
    }
    if(counter < slides.length -1){
        nextBtn.style.display = "inline"
    }
    if(counter === 0){
        prevBtn.style.display = "none"
    }
    slides.forEach((slide) =>{
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}