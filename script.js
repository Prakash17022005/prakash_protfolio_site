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

const fonts=[
    'Italianno',
    'Noto Sans Old Italic',
    'Piedra',
    'Audiowide',
    'Atomic Age',
    'Amatic SC',
    'Rye',
    'Indie Flower',
    'Tiny5',
    'Chakra Petch'
]

const letters=document.querySelectorAll('.letter');

let count=0;

const rollIntro = () => {
    letters.forEach(letter=>{
        let randomFontIndex=Math.floor(Math.random() * fonts.length);
        let randomFont = fonts[randomFontIndex];
        letter.style.fontFamily=randomFont;
    })
}

let introAnimation=setInterval(function(){
    rollIntro();
    if(count>30){
        clearInterval(introAnimation);

        setTimeout(()=>{
            const preloader=this.document.getElementById('preloader');
            preloader.style.display="none";

            //show main content
            const maincontent=this.document.getElementById("main-content");
            maincontent.style.display="block";
        },1000);
    }
        
    count++;
},200);

//preloader script

window.addEventListener("load",function(){
    
});