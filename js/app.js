var navButtons = document.querySelectorAll(".slider__nav");
var infoButtons = document.querySelectorAll(".slider__info-hide")
var slides = document.querySelectorAll(".slider__item");
var info = document.querySelectorAll(".slider__info");
var activeSlide = 0;

console.log(navButtons);
console.log(infoButtons);
console.log(slides);
console.log(info);

slides[activeSlide].classList.add("visible");

for (var i = 0; i < navButtons.length; i++) {

    navButtons[i].addEventListener("click", function () {

        slides[activeSlide].children[2].classList.remove("show-info");
        slides[activeSlide].children[1].innerText = "Info";

        if (this.id === "nextPicture") {

            slides[activeSlide].classList.remove("visible");
            activeSlide++;

            if (activeSlide >= slides.length) {
                activeSlide = 0
            }

            slides[activeSlide].classList.add("visible");
        }

        if (this.id === "prevPicture") {

            slides[activeSlide].classList.remove("visible");
            activeSlide--;

            if (activeSlide < 0) {
                activeSlide = slides.length - 1;
            }

            slides[activeSlide].classList.add("visible");
        }
    })
}

for (var i = 0; i < infoButtons.length; i++) {

    infoButtons[i].addEventListener("click", function () {

        this.nextElementSibling.classList.toggle("show-info");
        
        if (this.innerText === "Info") {
            this.innerText = "Hide";
        } else {
            this.innerText = "Info";
        }

    })
}
