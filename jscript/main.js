// ==================== MOBILE MENU & DROPDOWN LOGIC ====================

// 1. Mobile Menu Toggle (Hamburger)
const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('navMenu');

if (menuIcon && navMenu) {
    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// 2. Dropdown Logic (Accordion Style)
const dropdownLinks = document.querySelectorAll('.dropdown > a');

dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // ONLY run this logic on mobile screens
        if (window.innerWidth <= 920) {
            e.preventDefault(); // Stop link navigation

            const clickedLi = link.parentElement;       // The <li class="dropdown"> clicked
            const parentUl = clickedLi.parentElement;   // The parent <ul>

            // Step A: Close any SIBLING dropdowns that are open
            Array.from(parentUl.children).forEach(sibling => {
                if (sibling !== clickedLi && sibling.classList.contains('dropdown')) {
                    sibling.classList.remove('open');
                }
            });

            // Step B: Toggle the clicked dropdown
            clickedLi.classList.toggle('open');
        }
    });
});

// 3. Close Menu on Resize (Cleanup)
window.addEventListener('resize', () => {
    if (window.innerWidth > 920 && navMenu) {
        navMenu.classList.remove('active');
        document.querySelectorAll('.dropdown.open').forEach(el => el.classList.remove('open'));
    }
});
