let isMenuOpen = false; // Track whether the menu is open or closed

function open_menu(element) {
    isMenuOpen = !isMenuOpen; // Toggle the menu open/close state
    const menuOps = document.querySelector('.menuops');

    if (isMenuOpen) {
        menuOps.style.display = 'flex';
        menuOps.style.opacity = '1';
        element.style.transform = 'rotate(90deg)'; // Rotate arrow down
    } else {
        menuOps.style.display = 'none';
        menuOps.style.opacity = '0';
        element.style.transform = 'rotate(0deg)'; // Rotate arrow back to initial position
    }

    element.style.transition = "transform 0.3s ease"; // Smooth transition effect
    menuOps.style.transition = "opacity 0.5s ease";
}

// Add event listener to each nav link in menuops to close menu after clicking a link
document.querySelectorAll('.menuops a').forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false; // Close menu
        const menuOps = document.querySelector('.menuops');
        menuOps.style.display = 'none'; // Hide the menuops
        menuOps.style.opacity = '0';
        document.querySelector('.mob-arrow').style.transform = `rotate(0deg)`; // Reset arrow rotation
    });
});

// Active link highlighting in nav_menu
document.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav_link').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});
