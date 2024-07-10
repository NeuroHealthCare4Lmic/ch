function toggleMenu() {
  let menu = document.getElementById("myTopnav");
  menu.classList.toggle("active");
}

// Close the menu when a menu item is clicked
let menuItems = document.querySelectorAll('.topnav ul li a');
menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    let menu = document.getElementById("myTopnav");
    menu.classList.remove("active");
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown > a');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(event) {
          if (window.innerWidth <= 920) {
                         event.preventDefault();
                         this.parentElement.classList.toggle('active');
                     }
                 });
             });
         });
