// ==================== IMAGE SLIDER LOGIC FOR AFRICA REGIONAL ====================

const slidersData = [
    // Slider 0: 2024 Highlights
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

    // Slider 1: Cohort 2 Highlights
    {
        images: [
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

    // Slider 2: Cohort 2 Announcements
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

    // Slider 3: Cohort 2 Participants
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

    // Slider 4: Comments from First Cohort
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

    // Slider 5: Highlights of First Cohort
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
    }
];

// Sliders that should auto-slide (0 = first slider, 2 = third slider, etc.)
const autoSlideSliders = [0, 2, 3, 4];

/**
 * Creates a slider UI for a given slider index
 */
function createSlider(sliderIndex) {
    const sliderContainer = document.querySelector(`[data-slider="${sliderIndex}"]`);
    if (!sliderContainer) return;

    // Create slider HTML structure
    sliderContainer.innerHTML = `
        <img class="slider-img" src="${slidersData[sliderIndex].images[0]}" alt="Slider Image ${sliderIndex + 1}">
        <button class="prev" aria-label="Previous image">&#10094;</button>
        <button class="next" aria-label="Next image">&#10095;</button>
        <div class="dots"></div>
    `;

    // Get slider elements
    const prevBtn = sliderContainer.querySelector(".prev");
    const nextBtn = sliderContainer.querySelector(".next");
    const dotsContainer = sliderContainer.querySelector(".dots");

    // Add navigation event listeners
    prevBtn.addEventListener("click", () => changeSlide(sliderIndex, -1));
    nextBtn.addEventListener("click", () => changeSlide(sliderIndex, 1));

    // Create navigation dots
    slidersData[sliderIndex].images.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) {
            dot.classList.add("active-dot");
        }
        dot.addEventListener("click", () => goToSlide(sliderIndex, i));
        dotsContainer.appendChild(dot);
    });
}

/**
 * Updates the slider display and active dot
 */
function updateSlider(sliderIndex) {
    const slider = slidersData[sliderIndex];
    const sliderContainer = document.querySelector(`[data-slider="${sliderIndex}"]`);
    if (!sliderContainer) return;

    const imgElement = sliderContainer.querySelector(".slider-img");
    const dots = sliderContainer.querySelectorAll(".dot");

    // Update image source
    imgElement.src = slider.images[slider.currentIndex];

    // Update active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle("active-dot", i === slider.currentIndex);
    });
}

/**
 * Changes slide by a step amount (forward or backward)
 */
function changeSlide(sliderIndex, step) {
    const slider = slidersData[sliderIndex];
    // Calculate new index with wrap-around
    slider.currentIndex = (slider.currentIndex + step + slider.images.length) % slider.images.length;
    updateSlider(sliderIndex);
}

/**
 * Jumps to a specific slide
 */
function goToSlide(sliderIndex, imageIndex) {
    slidersData[sliderIndex].currentIndex = imageIndex;
    updateSlider(sliderIndex);
}

/**
 * Starts auto-sliding for selected sliders
 */
function startAutoSlide(sliderIndex, intervalTime = 4000) {
    if (!autoSlideSliders.includes(sliderIndex)) return;

    const sliderContainer = document.querySelector(`[data-slider="${sliderIndex}"]`);
    if (!sliderContainer) return;

    let interval = setInterval(() => changeSlide(sliderIndex, 1), intervalTime);

    // Pause auto-slide on hover
    sliderContainer.addEventListener("mouseenter", () => clearInterval(interval));

    // Resume auto-slide when mouse leaves
    sliderContainer.addEventListener("mouseleave", () => {
        interval = setInterval(() => changeSlide(sliderIndex, 1), intervalTime);
    });
}

// Initialize all sliders when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    slidersData.forEach((_, index) => {
        createSlider(index);
        startAutoSlide(index, 4000);
    });
});