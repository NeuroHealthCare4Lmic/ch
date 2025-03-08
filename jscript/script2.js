const slidersData = [

    { images: ['img/leb/odette.png', 'img/leb/reem.png', 'img/leb/AT.jpg','img/leb/BS.jpg', 'img/leb/CA.jpg', 'img/leb/CS.jpg', 'img/leb/JEK.jpg', 'img/leb/LH.jpg', 'img/leb/LS.jpg', 'img/leb/MH.jpg', 'img/leb/TT.jpg','img/leb/JW.jpg' ], currentIndex: 0 },

];


function createSlider(sliderIndex) {
    const sliderContainer = document.querySelector(`[data-slider="${sliderIndex}"]`);
    if (!sliderContainer) return;

    // Create slider elements
    sliderContainer.innerHTML = `
                <img class="slider-img" src="${slidersData[sliderIndex].images[0]}" alt="Image Slider">
                <button class="prev">&#10094;</button>
                <button class="next">&#10095;</button>
                <div class="dots"></div>
            `;

    // Add event listeners
    const prevBtn = sliderContainer.querySelector(".prev");
    const nextBtn = sliderContainer.querySelector(".next");
    const imgElement = sliderContainer.querySelector(".slider-img");
    const dotsContainer = sliderContainer.querySelector(".dots");

    prevBtn.addEventListener("click", () => changeSlide(sliderIndex, -1));
    nextBtn.addEventListener("click", () => changeSlide(sliderIndex, 1));

    // Create dots dynamically
    slidersData[sliderIndex].images.forEach((_, i) => {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => goToSlide(sliderIndex, i));
        dotsContainer.appendChild(dot);
    });

    updateSlider(sliderIndex);
}

function updateSlider(sliderIndex) {
    const sliderContainer = document.querySelector(`[data-slider="${sliderIndex}"]`);
    const imgElement = sliderContainer.querySelector(".slider-img");
    const dots = sliderContainer.querySelectorAll(".dot");

    imgElement.src = slidersData[sliderIndex].images[slidersData[sliderIndex].currentIndex];
    dots.forEach((dot, i) => dot.classList.toggle("active", i === slidersData[sliderIndex].currentIndex));
}

function changeSlide(sliderIndex, step) {
    const slider = slidersData[sliderIndex];
    slider.currentIndex = (slider.currentIndex + step + slider.images.length) % slider.images.length;
    updateSlider(sliderIndex);
}

function goToSlide(sliderIndex, imageIndex) {
    slidersData[sliderIndex].currentIndex = imageIndex;
    updateSlider(sliderIndex);
}

// Initialize sliders dynamically
slidersData.forEach((_, index) => createSlider(index));

const autoSlideSliders = [0, 2, 3, 4]; // Specify which sliders should auto-slide (0 = first slider, 2 = third slider)

function startAutoSlide(sliderIndex, intervalTime = 3000) {
    if (!autoSlideSliders.includes(sliderIndex)) return; // Only start auto-slide for selected sliders

    let sliderContainer = document.querySelector(`[data-slider="${sliderIndex}"]`);
    let interval = setInterval(() => changeSlide(sliderIndex, 1), intervalTime);

    // Pause when hovered
    sliderContainer.addEventListener("mouseenter", () => clearInterval(interval));

    // Resume when mouse leaves
    sliderContainer.addEventListener("mouseleave", () => {
        interval = setInterval(() => changeSlide(sliderIndex, 1), intervalTime);
    });
}

// Initialize sliders dynamically & start auto-slide only for selected ones
document.addEventListener("DOMContentLoaded", function () {
    slidersData.forEach((_, index) => {
        createSlider(index);
        startAutoSlide(index, 4000); // Auto-slide only for selected sliders
    });
});