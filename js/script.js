/* =========================================
   BIRTHDAY HERO SLIDER
========================================= */

const slides = [
    {
        image: "images/channa5.jpg",
        caption: "You mean the world to me."
    },
    {
        image: "images/channa6.jpg",
        caption: "Every moment with you is special."
    },
    {
        image: "images/channa9.webp",
        caption: "My favourite person, always."
    },
    {
        image: "images/channa8.webp",
        caption: "Forever grateful for you."
    },
    {
        image: "images/channa4.jpg",
        caption: "Your smile make my day."
    },
    {
        image: "images/channa10.webp",
        caption: "Your smile make my day."
    }
];


let currentSlide = 0;

const sliderImage = document.getElementById("sliderImage");
const captionText = document.querySelector(
    ".polaroid-caption span:first-child"
);

const dotsContainer = document.getElementById("sliderDots");

const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");


/* =========================================
   CREATE DOTS
========================================= */

slides.forEach((slide, index) => {

    const dot = document.createElement("button");

    dot.classList.add("slider-dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
        showSlide(index);
    });

    dotsContainer.appendChild(dot);
});


/* =========================================
   SHOW SLIDE
========================================= */

function showSlide(index) {

    currentSlide = index;

    sliderImage.classList.remove("active");

    setTimeout(() => {

        sliderImage.src = slides[currentSlide].image;

        captionText.textContent =
            slides[currentSlide].caption;

        sliderImage.classList.add("active");

    }, 300);


    updateDots();
}


/* =========================================
   UPDATE DOTS
========================================= */

function updateDots() {

    const dots =
        document.querySelectorAll(".slider-dot");

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentSlide
        );

    });
}


/* =========================================
   NEXT
========================================= */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}


/* =========================================
   PREVIOUS
========================================= */

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}


nextButton.addEventListener(
    "click",
    nextSlide
);

prevButton.addEventListener(
    "click",
    previousSlide
);


/* =========================================
   AUTOMATIC SLIDER
========================================= */

let autoSlide = setInterval(
    nextSlide,
    5000
);


/* =========================================
   PAUSE WHEN MOUSE IS OVER SLIDER
========================================= */

const slider = document.querySelector(
    ".hero-slider"
);

slider.addEventListener("mouseenter", () => {

    clearInterval(autoSlide);

});

slider.addEventListener("mouseleave", () => {

    autoSlide = setInterval(
        nextSlide,
        5000
    );

});


const musicBtn = document.getElementById("musicBtn");
const backgroundMusic = document.getElementById("backgroundMusic");

let musicPlaying = false;

musicBtn.addEventListener("click", async () => {
    if (!musicPlaying) {
        try {
            await backgroundMusic.play();

            musicPlaying = true;
            musicBtn.innerHTML = '♫ <span>Music Off</span>';
        } catch (error) {
            console.error("Unable to play music:", error);
        }
    } else {
        backgroundMusic.pause();

        musicPlaying = false;
        musicBtn.innerHTML = '♫ <span>Music On</span>';
    }
});

/* ========================================
   BIRTHDAY COUNTERS
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* Fixed counters */
    const counters = document.querySelectorAll(
        ".stat-number[data-target]"
    );

    counters.forEach(counter => {

        const target = Number(
            counter.dataset.target
        );

        let current = 0;

        const increment = target / 50;

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                counter.textContent =
                    Math.ceil(current);

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.textContent =
                    target.toLocaleString();

            }
        };

        updateCounter();
    });


    /* ========================================
       DAYS SINCE BIRTH
    ======================================== */

    const daysCounter =
        document.getElementById("daysCounter");


    /*
       CHANGE THIS TO HER ACTUAL
       DATE OF BIRTH
       
       Format:
       YYYY-MM-DD
    */

    const birthDate =
        new Date("1995-01-01");


    const today = new Date();


    /* Calculate difference */

    const difference =
        today.getTime() -
        birthDate.getTime();


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    /* Show days */

    daysCounter.textContent =
        days.toLocaleString();

});