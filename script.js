let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.top = '0';
}
function hideMenu(){
    navLinks.style.top = '-800px';
}

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.animated-img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
    }

    setInterval(showNextImage, 5000); // Change image every 5 seconds
});

let hideTimeout;

function toggleSubMenu(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    const subMenu = event.target.nextElementSibling; // Get the next sibling element (sub-menu)
    
    if (subMenu.style.display === "block") {
        hideTimeout = setTimeout(() => {
            subMenu.style.display = "none"; // Hide the sub-menu after delay
        }, 500); // Delay hiding by 500ms
    } else {
        subMenu.style.display = "block"; // Show the sub-menu
    }

    subMenu.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout); // Clear timeout when hovered over
    });

    subMenu.addEventListener('mouseleave', () => {
        hideTimeout = setTimeout(() => {
            subMenu.style.display = "none"; // Hide the sub-menu after delay
        }, 500); // Delay hiding by 500ms
    });
}
