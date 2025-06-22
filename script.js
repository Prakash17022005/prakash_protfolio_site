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




// Preloader font animation
const fonts = [
    'Italianno', 'Noto Sans Old Italic', 'Piedra', 'Audiowide', 
    'Atomic Age', 'Amatic SC', 'Rye', 'Indie Flower', 'Chakra Petch'
];

const letters = document.querySelectorAll('.letter');
let count = 0;

const rollIntro = () => {
    letters.forEach(letter => {
        let randomFontIndex = Math.floor(Math.random() * fonts.length);
        let randomFont = fonts[randomFontIndex];
        letter.style.fontFamily = randomFont;
    });
};

window.addEventListener("DOMContentLoaded", () => {
    let introAnimation = setInterval(() => {
        rollIntro();
        count++;
        if (count > 10) {
            clearInterval(introAnimation);
            setTimeout(() => {
                document.getElementById('preloader').style.display = "none";
                document.getElementById("main-content").style.display = "block";
            }, 1000);
        }
    }, 300);
});


//typing animation

const options={
    strings:[
        "A <strong>Creative Developer</strong> focused on <em>“Crafting Code with Purpose.”</em>",
        "A <strong>Creative Developer</strong> focused on <em>“Building Tomorrow, Today.”</em>",
        "A <strong>Creative Developer</strong> focused on <em>“Building with Intention, Innovating with Heart.”</em>"
    ],

    typeSpeed:80,
    backSpeed:60,
    backDelay:2000,
    loop:true,
    smartBackspace:true,
    showCursor:true,
    cursorChar:' |',
};

new Typed("#typing-animation",options);