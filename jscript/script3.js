const slidersData = [
    {
        
        images: [
            "img/2coh/hl/1.png",
            "img/2coh/hl/2.png",
            "img/2coh/hl/3.png",
            "img/2coh/hl/4.png",
            "img/2coh/hl/5.png",
            "img/2coh/hl/6.png",
            "img/2coh/hl/8.png",
            "img/2coh/hl/9.png",
            "img/2coh/hl/10.png",
            "img/2coh/hl/11.png",
            "img/2coh/hl/12.png",
            "img/2coh/hl/13.png",
            "img/2coh/hl/14.png",
            "img/2coh/hl/15.png",
            "img/2coh/hl/16.png",
            "img/2coh/hl/17.png",
            "img/2coh/hl/18.png",
            "img/2coh/hl/19.png",
            "img/2coh/hl/21.png",
            "img/2coh/hl/22.png",
            "img/2coh/hl/23.png",
            "img/2coh/hl/24.png",
            "img/2coh/hl/25.png",
            "img/2coh/hl/26.png",
            "img/2coh/hl/27.png",
            "img/2coh/hl/28.png"
        ],
        currentIndex: 0
    },
        
     {   images: [
            "img/2coh/coh2/coh2h.jpg",
            "img/2coh/coh2/coh2g.jpeg",
            "img/2coh/coh2/coh2f.jpeg",
            "img/2coh/coh2/coh2e.jpg",
            "img/2coh/coh2/coh2d.jpg",
            "img/2coh/coh2/coh2c.jpg",
            "img/2coh/coh2/coh2b.jpeg",
            "img/2coh/coh2/coh2a.jpg"
        ],
        currentIndex: 0
    },

    {
        images: [
            "img/2coh/1a.jpeg",
            "img/2coh/1.jpeg",
            "img/2coh/2.jpeg",
            "img/2coh/3.jpeg",
            "img/2coh/4.jpeg",
            "img/2coh/5.jpeg",
            "img/2coh/6.jpeg",
            "img/2coh/7.jpeg",
            "img/2coh/8.jpeg",
            "img/2coh/9.jpeg",
            "img/2coh/10.jpeg",
            "img/2coh/11.jpeg",
            "img/2coh/12.jpeg",
            "img/2coh/13.jpeg",
            "img/2coh/14.jpeg",
            "img/2coh/15.jpeg",
            "img/2coh/16.jpeg",
            "img/2coh/17.jpeg",
            "img/2coh/18.jpeg",
            "img/2coh/19.jpeg"
        ],
        currentIndex: 0
    },
    {
        images: [
            "img/1coh/1.png",
            "img/1coh/2.png",
            "img/1coh/3.png",
            "img/1coh/4.png",
            "img/1coh/5.png",
            "img/1coh/6.png",
            "img/1coh/7.png",
            "img/1coh/8.png",
            "img/1coh/9.png",
            "img/1coh/10.png",
            "img/1coh/11.png",
            "img/1coh/12.png"
        ],
        currentIndex: 0
    },
    {
        images: [
            "img/coh1.png",
            "img/coh2.png",
            "img/coh3.png",
            "img/coh4.png",
            "img/coh5.png",
            "img/coh6.png",
            "img/coh7.png",
            "img/coh8.png",
            "img/coh9.png"
        ],
        currentIndex: 0
    },
    {
        images: [
            "img/c1i.jpg",
            "img/c1h.jpg",
            "img/c1g.jpg",
            "img/c1f.jpg",
            "img/c1e.jpg",
            "img/c1d.jpg",
            "img/c1c.jpg",
            "img/c1b.jpg",
            "img/c1a.jpg"
        ],
        currentIndex: 0
    },
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