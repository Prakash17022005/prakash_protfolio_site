let isMenuOpen = false;

function open_menu(element) {
  isMenuOpen = !isMenuOpen;
  const menuOps = document.querySelector('.menuops');
  if (isMenuOpen) {
    menuOps.style.display = 'flex';
    menuOps.style.opacity = '1';
    element.style.transform = 'rotate(90deg)';
  } else {
    menuOps.style.display = 'none';
    menuOps.style.opacity = '0';
    element.style.transform = 'rotate(0deg)';
  }
  element.style.transition = "transform 0.3s ease";
  menuOps.style.transition = "opacity 0.5s ease";
}

document.querySelectorAll('.menuops a').forEach(link => {
  link.addEventListener('click', () => {
    isMenuOpen = false;
    document.querySelector('.menuops').style.display = 'none';
    document.querySelector('.menuops').style.opacity = '0';
    document.querySelector('.mob-arrow').style.transform = 'rotate(0deg)';
  });
});

document.querySelectorAll('.nav_link').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav_link').forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});

// Preloader font animation
const fonts = ['Italianno','Piedra','Audiowide','Atomic Age','Amatic SC','Rye','Chakra Petch'];
const letters = document.querySelectorAll('.letter');
let count = 0;

const rollIntro = () => {
  letters.forEach(letter => {
    let font = fonts[Math.floor(Math.random() * fonts.length)];
    letter.style.fontFamily = font;
  });
};

window.addEventListener("DOMContentLoaded", () => {
    // Wait until fonts are fully loaded
    document.fonts.ready.then(() => {
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
  });
  

// Typed.js animation
new Typed("#typing-animation", {
  strings: [
    "A <strong>Creative Developer</strong> focused on <em>“Crafting Code with Purpose.”</em>",
    "A <strong>Creative Developer</strong> focused on <em>“Building Tomorrow, Today.”</em>",
    "A <strong>Creative Developer</strong> focused on <em>“Building with Intention, Innovating with Heart.”</em>"
  ],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 2000,
  loop: true,
  smartBackspace: true,
  showCursor: true,
  cursorChar: ' |',
});

// Close mobile menu when clicking outside or on empty space
document.addEventListener('click', function (event) {
    const menuOps = document.querySelector('.menuops');
    const arrow = document.querySelector('.mob-arrow');

    const isClickInsideMenu = menuOps.contains(event.target);
    const isClickOnArrow = arrow.contains(event.target);

    // If menu is open and click is outside menu AND not on arrow
    if (isMenuOpen && !isClickInsideMenu && !isClickOnArrow) {
        isMenuOpen = false;
        menuOps.style.display = 'none';
        menuOps.style.opacity = '0';
        arrow.style.transform = `rotate(0deg)`;
    }
});

//skills

  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      tabButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      tabContents.forEach(tab => {
        tab.classList.remove("active");
        if (tab.id === button.dataset.tab) tab.classList.add("active");
      });
    });
  });



