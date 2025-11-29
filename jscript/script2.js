// ==================== IMAGE SLIDER LOGIC (from script2.js) ====================

const slidersData = [

    { images: ['img/leb/odette.png', 'img/leb/reem.png', 'img/leb/AT.jpg','img/leb/BS.jpg', 'img/leb/CA.jpg', 'img/leb/CS.jpg', 'img/leb/JEK.jpg', 'img/leb/LH.jpg', 'img/leb/LS.jpg', 'img/leb/MH.jpg', 'img/leb/TT.jpg','img/leb/JW.jpg' ], currentIndex: 0 },

];


function createSlider(sliderIndex) {
    const sliderContainer = document.querySelector(`[data-slider=\"${sliderIndex}\"]`);
    if (!sliderContainer) return;

    // Create slider elements
    sliderContainer.innerHTML = `
                <img class=\"slider-img\" src=\"${slidersData[sliderIndex].images[0]}\" alt=\"Image Slider\">\
                <button class=\"prev\">&#10094;</button>\
                <button class=\"next\">&#10095;</button>\
                <div class=\"dots\"></div>
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
        if (i === slidersData[sliderIndex].currentIndex) {
            dot.classList.add("active-dot"); // Set initial active dot
        }
        dot.addEventListener("click", () => goToSlide(sliderIndex, i));
        dotsContainer.appendChild(dot);
    });
}

function updateSlider(sliderIndex) {
    const slider = slidersData[sliderIndex];
    const sliderContainer = document.querySelector(`[data-slider=\"${sliderIndex}\"]`);
    if (!sliderContainer) return;

    const imgElement = sliderContainer.querySelector(".slider-img");
    const dots = sliderContainer.querySelectorAll(".dot");

    // 1. Update image source
    imgElement.src = slider.images[slider.currentIndex];

    // 2. Update dots: Remove active class from all, then add to the current one.
    dots.forEach(dot => dot.classList.remove('active-dot'));
    
    if (dots[slider.currentIndex]) {
        dots[slider.currentIndex].classList.add('active-dot');
    }
}


function changeSlide(sliderIndex, step) {
    const slider = slidersData[sliderIndex];
    // Calculate new index, handling wrap-around for both directions
    slider.currentIndex = (slider.currentIndex + step + slider.images.length) % slider.images.length;
    updateSlider(sliderIndex);
}

function goToSlide(sliderIndex, imageIndex) {
    slidersData[sliderIndex].currentIndex = imageIndex;
    updateSlider(sliderIndex);
}

// Initialize sliders dynamically
// NOTE: I've commented out the direct function calls here to rely only on the DOMContentLoaded listener below,
// which is safer to ensure all elements are ready.
// slidersData.forEach((_, index) => createSlider(index));

const autoSlideSliders = [0, 2, 3, 4]; // Specify which sliders should auto-slide (0 = first slider, 2 = third slider)

function startAutoSlide(sliderIndex, intervalTime = 3000) {
    if (!autoSlideSliders.includes(sliderIndex)) return; // Only start auto-slide for selected sliders

    let sliderContainer = document.querySelector(`[data-slider=\"${sliderIndex}\"]`);
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