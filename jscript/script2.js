
    // Profile Data
    const profiles = [
      {
        name: "Bachar Sleiman",
        title: "Vice President at Neuro Health Care 4 LMIC",
        description: "Bachar Sleiman serves as the Vice President of Neuro Health Care 4 LMIC and is a distinguished medical student at the University of Balamand. Currently enhancing his clinical acumen through rotations at leading hospitals in Beirut, Bachar brings a distinctive, evidence-based approach to patient care. This perspective is rooted in his advanced training, which includes a Master's degree in Molecular Biology, providing him with a strong foundation in research and scientific inquiry. As a proven leader who has held multiple cabinet positions in student-led organizations, Bachar is deeply committed to leveraging his dual expertise to advance global neurological equity and champion service-driven medical education through his leadership role at Neuro Health Care 4 LMIC.",
        location: "Beirut, Lebanon",
        qualification: "Medical Student",
        image: "./img/bash.jpg",
        hasImage: true
      },
      {
        name: "Fatima",
        title: "Medical Student",
        description: "Fatima is a dedicated Medical Laboratory Sciences student pursuing the pre-medical track, with a pronounced and focused interest in surgical medicine. Driven by a commitment to advancing patient care, she is actively seeking opportunities to deepen her knowledge in surgical practices and the broader medical field. Through her role at Neuro Health Care 4 LMIC, Fatima looks forward to contributing her learning, collaborating with like-minded professionals, and driving meaningful initiatives aimed at enhancing neurological healthcare access in Low- and Middle-Income Countries.",
        location: "Beirut, Lebanon",
        qualification: "Medical Student",
        image: "./img/fatima.jpg",
        hasImage: true
      },
      {
        name: "Christelle",
        title: "Medical Student",
        description: "Christelle is a highly driven Biology and Psychology student at the American University of Beirut, Lebanon. She is captivated by the intricate systems of the human brain, which she pairs with a deep-seated commitment to community engagement, advocacy, and educational outreach. Christelle joined Neuro Health Care 4 LMIC to translate her academic passion into tangible action, working to uphold and globally disseminate the organization's mission of accessible neurological care and education.",
        location: "Beirut, Lebanon",
        qualification: "Medical Student",
        image: "./img/christ.jpg",
        hasImage: true
      },
      {
        name: "Hamsa Al Sayegh",
        title: "Medical Student",
        description: "Hamsa Al Sayegh is a second-year Psychology major on the premedical track at the American University of Beirut. Driven by a passion for the intricate connections between the mind and the nervous system, she focuses her studies on neuroscience and neurology, with specific interests in neuropsychology and neuro-oncology. Hamsa aspires to eventually pursue a career as a physician specializing in Neurology, dedicated to addressing complex neurological and psychological challenges in clinical practice. Her reason to join Neuro Health Care 4 LMIC is to learn and promote its values.",
        location: "Beirut, Lebanon",
        qualification: "Medical Student",
        image: "",
        hasImage: false,
        icon: "fa-user-doctor"
      }
    ];

    let currentIndex = 0;

    // Initialize Profiles
    function initProfiles() {
      const container = document.getElementById('profilesContainer');
      const dotsContainer = document.getElementById('dotsContainer');

      profiles.forEach((profile, index) => {
        const card = document.createElement('div');
        card.className = `profile-card ${index === 0 ? 'active' : ''}`;
        card.innerHTML = `
          <div class="profile-image">
            ${profile.hasImage
              ? `<img src="${profile.image}" alt="${profile.name}">`
              : `<div class="profile-image-placeholder">
                   <i class="fa-solid ${profile.icon}"></i>
                 </div>`
            }
          </div>
          <div class="profile-content">
            <h3 class="profile-name">${profile.name}</h3>
            <p class="profile-title">${profile.title}</p>
            <p class="profile-description">${profile.description}</p>
            <div class="profile-meta">
              <div class="meta-item">
                <i class="fa-solid fa-location-dot"></i>
                <span>${profile.location}</span>
              </div>
              <div class="meta-item">
                <i class="fa-solid fa-graduation-cap"></i>
                <span>${profile.qualification}</span>
              </div>
            </div>
          </div>
        `;
        container.appendChild(card);

        const dot = document.createElement('span');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToProfile(index);
        dotsContainer.appendChild(dot);
      });
    }

    function changeProfile(direction) {
      const cards = document.querySelectorAll('.profile-card');
      const dots = document.querySelectorAll('.dot');

      cards[currentIndex].classList.remove('active');
      dots[currentIndex].classList.remove('active');

      currentIndex = (currentIndex + direction + profiles.length) % profiles.length;

      cards[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
    }

    function goToProfile(index) {
      const cards = document.querySelectorAll('.profile-card');
      const dots = document.querySelectorAll('.dot');

      cards[currentIndex].classList.remove('active');
      dots[currentIndex].classList.remove('active');

      currentIndex = index;

      cards[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
    }

    let autoSlideInterval;
    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        changeProfile(1);
      }, 5000);
    }

    document.querySelector('.profile-slider-container').addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
    });

    document.querySelector('.profile-slider-container').addEventListener('mouseleave', () => {
      startAutoSlide();
    });

    window.addEventListener('DOMContentLoaded', () => {
      initProfiles();
      startAutoSlide();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') changeProfile(-1);
      if (e.key === 'ArrowRight') changeProfile(1);
    });





// // ==================== IMAGE SLIDER LOGIC (from script2.js) ====================
//
// const slidersData = [
//
//     { images: ['img/leb/odette.png', 'img/leb/reem.png', 'img/leb/AT.jpg','img/leb/BS.jpg', 'img/leb/CA.jpg', 'img/leb/CS.jpg', 'img/leb/JEK.jpg', 'img/leb/LH.jpg', 'img/leb/LS.jpg', 'img/leb/MH.jpg', 'img/leb/TT.jpg','img/leb/JW.jpg' ], currentIndex: 0 },
//
// ];
//
//
// function createSlider(sliderIndex) {
//     const sliderContainer = document.querySelector(`[data-slider=\"${sliderIndex}\"]`);
//     if (!sliderContainer) return;
//
//     // Create slider elements
//     sliderContainer.innerHTML = `
//                 <img class=\"slider-img\" src=\"${slidersData[sliderIndex].images[0]}\" alt=\"Image Slider\">\
//                 <button class=\"prev\">&#10094;</button>\
//                 <button class=\"next\">&#10095;</button>\
//                 <div class=\"dots\"></div>
//             `;
//
//     // Add event listeners
//     const prevBtn = sliderContainer.querySelector(".prev");
//     const nextBtn = sliderContainer.querySelector(".next");
//     const imgElement = sliderContainer.querySelector(".slider-img");
//     const dotsContainer = sliderContainer.querySelector(".dots");
//
//     prevBtn.addEventListener("click", () => changeSlide(sliderIndex, -1));
//     nextBtn.addEventListener("click", () => changeSlide(sliderIndex, 1));
//
//     // Create dots dynamically
//     slidersData[sliderIndex].images.forEach((_, i) => {
//         let dot = document.createElement("span");
//         dot.classList.add("dot");
//         if (i === slidersData[sliderIndex].currentIndex) {
//             dot.classList.add("active-dot"); // Set initial active dot
//         }
//         dot.addEventListener("click", () => goToSlide(sliderIndex, i));
//         dotsContainer.appendChild(dot);
//     });
// }
//
// function updateSlider(sliderIndex) {
//     const slider = slidersData[sliderIndex];
//     const sliderContainer = document.querySelector(`[data-slider=\"${sliderIndex}\"]`);
//     if (!sliderContainer) return;
//
//     const imgElement = sliderContainer.querySelector(".slider-img");
//     const dots = sliderContainer.querySelectorAll(".dot");
//
//     // 1. Update image source
//     imgElement.src = slider.images[slider.currentIndex];
//
//     // 2. Update dots: Remove active class from all, then add to the current one.
//     dots.forEach(dot => dot.classList.remove('active-dot'));
//
//     if (dots[slider.currentIndex]) {
//         dots[slider.currentIndex].classList.add('active-dot');
//     }
// }
//
//
// function changeSlide(sliderIndex, step) {
//     const slider = slidersData[sliderIndex];
//     // Calculate new index, handling wrap-around for both directions
//     slider.currentIndex = (slider.currentIndex + step + slider.images.length) % slider.images.length;
//     updateSlider(sliderIndex);
// }
//
// function goToSlide(sliderIndex, imageIndex) {
//     slidersData[sliderIndex].currentIndex = imageIndex;
//     updateSlider(sliderIndex);
// }
//
// // Initialize sliders dynamically
// // NOTE: I've commented out the direct function calls here to rely only on the DOMContentLoaded listener below,
// // which is safer to ensure all elements are ready.
// // slidersData.forEach((_, index) => createSlider(index));
//
// const autoSlideSliders = [0, 2, 3, 4]; // Specify which sliders should auto-slide (0 = first slider, 2 = third slider)
//
// function startAutoSlide(sliderIndex, intervalTime = 3000) {
//     if (!autoSlideSliders.includes(sliderIndex)) return; // Only start auto-slide for selected sliders
//
//     let sliderContainer = document.querySelector(`[data-slider=\"${sliderIndex}\"]`);
//     let interval = setInterval(() => changeSlide(sliderIndex, 1), intervalTime);
//
//     // Pause when hovered
//     sliderContainer.addEventListener("mouseenter", () => clearInterval(interval));
//
//     // Resume when mouse leaves
//     sliderContainer.addEventListener("mouseleave", () => {
//         interval = setInterval(() => changeSlide(sliderIndex, 1), intervalTime);
//     });
// }
//
// // Initialize sliders dynamically & start auto-slide only for selected ones
// document.addEventListener("DOMContentLoaded", function () {
//     slidersData.forEach((_, index) => {
//         createSlider(index);
//         startAutoSlide(index, 4000); // Auto-slide only for selected sliders
//     });
// });
