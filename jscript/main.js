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

// ==================== ANNOUNCEMENTS TOGGLE LOGIC ====================

// 4. Announcements Dashboard Toggle
const toggleButton = document.getElementById('toggleAnnouncements');
const announcementsContent = document.getElementById('announcementsContent');

if (toggleButton && announcementsContent) {
    toggleButton.addEventListener('click', () => {
        // Toggle collapsed class
        announcementsContent.classList.toggle('collapsed');
        toggleButton.classList.toggle('collapsed');
        
        // Update aria-expanded for accessibility
        const isCollapsed = announcementsContent.classList.contains('collapsed');
        toggleButton.setAttribute('aria-expanded', !isCollapsed);
        
        // Optional: Save state to localStorage
        localStorage.setItem('announcementsCollapsed', isCollapsed);
    });
    
    // Restore collapsed state from localStorage on page load
    const savedState = localStorage.getItem('announcementsCollapsed');
    if (savedState === 'true') {
        announcementsContent.classList.add('collapsed');
        toggleButton.classList.add('collapsed');
        toggleButton.setAttribute('aria-expanded', 'false');
    }
}

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================

// 5. Smooth Scroll to Sections
document.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only handle internal anchor links (not # or javascript:void)
            if (href !== '#' && href !== 'javascript:void(0);' && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                    }
                    
                    // Smooth scroll to target
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});