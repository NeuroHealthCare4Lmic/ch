const sliders = [

    { images: ['img/leb/odette.png', 'img/leb/reem.png', 'img/leb/AT.jpg','img/leb/BS.jpg', 'img/leb/CA.jpg', 'img/leb/2coh/CS.jpg', 'img/leb/2coh/JEK.jpg', 'img/leb/LH.jpg', 'img/leb/LS.jpg', 'img/leb/MH.jpg', 'img/leb/TT.jpeg'], currentIndex: 0 },

];

// Create dots and set up each slider
sliders.forEach((slider, index) => {
    createDots(index, slider.images.length);
    updateImage(index);
});

// Function to create dots dynamically based on the number of images
function createDots(sliderIndex, imageCount) {
    const dotsContainer = document.getElementById(`dots-container-${sliderIndex + 1}`);
    for (let i = 0; i < imageCount; i++) {
        let dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('data-index', i);
        dot.onclick = function () {
            goToSlide(sliderIndex, i);
        };
        dotsContainer.appendChild(dot);
    }
}

// Update the image and active dot for a specific slider
function updateImage(sliderIndex) {
    const sliderImg = document.querySelector(`#slider${sliderIndex + 1} .slider-img`);
    const dots = document.querySelectorAll(`#dots-container-${sliderIndex + 1} .dot`);

    sliderImg.src = sliders[sliderIndex].images[sliders[sliderIndex].currentIndex];

    // Update active class for dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === sliders[sliderIndex].currentIndex);
    });
}

// Functions to move to the next or previous image
function prev(sliderIndex) {
    sliders[sliderIndex].currentIndex = (sliders[sliderIndex].currentIndex <= 0) ? sliders[sliderIndex].images.length - 1 : sliders[sliderIndex].currentIndex - 1;
    updateImage(sliderIndex);
}

function next(sliderIndex) {
    sliders[sliderIndex].currentIndex = (sliders[sliderIndex].currentIndex >= sliders[sliderIndex].images.length - 1) ? 0 : sliders[sliderIndex].currentIndex + 1;
    updateImage(sliderIndex);
}

// Jump to a specific slide when a dot is clicked
function goToSlide(sliderIndex, imageIndex) {
    sliders[sliderIndex].currentIndex = imageIndex;
    updateImage(sliderIndex);
}

// Optional: Automatic sliding (uncomment to enable auto sliding for each slider)
setInterval(() => next(0), 3000); // Auto slide for first slider every 3 seconds
setInterval(() => next(1), 6000); // Auto slide for second slider every 3 seconds
setInterval(() => next(2), 5000); // Auto slide for second slider every 3 seconds
