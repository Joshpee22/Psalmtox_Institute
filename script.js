let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.top = '0';
}
function hideMenu(){
    navLinks.style.top = '-800px'
}

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.animated-img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
    }

    setInterval(showNextImage, 5000); // Change image every 3 seconds
});




function toggleSubMenu(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    const subMenu = event.target.nextElementSibling; // Get the next sibling element (sub-menu)
    
    if (subMenu.style.display === "block") {
        subMenu.style.display = "none"; // Hide the sub-menu if it's already visible
    } else {
        subMenu.style.display = "block"; // Show the sub-menu
    }
}
