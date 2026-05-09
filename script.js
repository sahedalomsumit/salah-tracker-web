// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursor = document.getElementById('cursor');
if (cursor) {
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animateCursor = () => {
    // Smooth lagging effect
    const easing = 0.15;
    cursorX += (mouseX - cursorX) * easing;
    cursorY += (mouseY - cursorY) * easing;
    
    cursor.style.transform = `translate3d(${cursorX - 6}px, ${cursorY - 6}px, 0)`;
    requestAnimationFrame(animateCursor);
  };
  animateCursor();

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });
}

// Aura Background Movement
const aura1 = document.getElementById('aura-1');
const aura2 = document.getElementById('aura-2');
if (aura1 && aura2) {
  document.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 768) return;
    const moveX = (e.clientX - window.innerWidth / 2) * 0.03;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.03;
    
    gsap.to(aura1, {
      x: moveX,
      y: moveY,
      duration: 3,
      ease: 'power2.out'
    });
    gsap.to(aura2, {
      x: -moveX,
      y: -moveY,
      duration: 3,
      ease: 'power2.out'
    });
  });
}

// Sticky Header Logic
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('py-4');
    header.classList.remove('py-6');
  } else {
    header.classList.remove('py-4');
    header.classList.add('py-6');
  }
});


// Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuSpans = menuBtn.querySelectorAll('span');

let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
    mobileMenu.style.display = 'flex';
    gsap.to(mobileMenu, { x: 0, opacity: 1, duration: 0.6, ease: 'power4.out' });
    
    // Animate spans
    menuSpans[0].classList.add('translate-y-2', 'rotate-45');
    menuSpans[1].classList.add('opacity-0', 'translate-x-3');
    menuSpans[2].classList.add('-translate-y-2', '-rotate-45');
    
    const links = mobileMenu.querySelectorAll('a');
    gsap.fromTo(links, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out', delay: 0.3 }
    );
  } else {
    closeMenu();
  }
});

function closeMenu() {
  isMenuOpen = false;
  document.body.style.overflow = 'unset';
  
  menuSpans[0].classList.remove('translate-y-2', 'rotate-45');
  menuSpans[1].classList.remove('opacity-0', 'translate-x-3');
  menuSpans[2].classList.remove('-translate-y-2', '-rotate-45');
  
  const tl = gsap.timeline();
  tl.to(mobileMenu.querySelectorAll('a'), {
    y: 30,
    opacity: 0,
    duration: 0.3,
    stagger: 0.05,
    ease: 'power2.in'
  });
  tl.to(mobileMenu, {
    x: '100%',
    opacity: 0,
    duration: 0.5,
    ease: 'power4.in',
    onComplete: () => { mobileMenu.style.display = 'none'; }
  }, "-=0.2");
}

// Close menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(el => {
  const direction = el.dataset.direction || 'up';
  let startVars = { opacity: 0 };
  
  switch(direction) {
    case 'left': startVars.x = -40; break;
    case 'right': startVars.x = 40; break;
    case 'down': startVars.y = -30; break;
    case 'up': default: startVars.y = 30; break;
  }
  
  gsap.fromTo(el, 
    { ...startVars, autoAlpha: 0 },
    {
      autoAlpha: 1,
      x: 0,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        toggleActions: 'play none none none'
      }
    }
  );
});

// Theme Switcher for Screenshots
const darkBtn = document.getElementById('dark-mode-btn');
const lightBtn = document.getElementById('light-mode-btn');
const toggleIndicator = document.getElementById('toggle-indicator');
const screenshotImages = document.querySelectorAll('.screenshot-img');

if (darkBtn && lightBtn) {
  const darkScreenshots = [
    'img/salah tracker app - screenshot (1).jpeg',
    'img/salah tracker app - screenshot (2).jpeg',
    'img/salah tracker app - screenshot (3).jpeg',
    'img/salah tracker app - screenshot (4).jpeg',
    'img/salah tracker app - screenshot (5).jpeg',
    'img/salah tracker app - screenshot (6).jpeg'
  ];

  const lightScreenshots = [
    'img/salah tracker app - light - screenshot (1).jpeg',
    'img/salah tracker app - light - screenshot (2).jpeg',
    'img/salah tracker app - light - screenshot (3).jpeg',
    'img/salah tracker app - light - screenshot (4).jpeg',
    'img/salah tracker app - light - screenshot (5).jpeg',
    'img/salah tracker app - light - screenshot (6).jpeg'
  ];

  darkBtn.addEventListener('click', () => {
    toggleIndicator.classList.add('left-1');
    toggleIndicator.classList.remove('left-[calc(50%+2px)]');
    darkBtn.classList.add('text-white');
    darkBtn.classList.remove('text-gray-500');
    lightBtn.classList.remove('text-white');
    lightBtn.classList.add('text-gray-500');
    
    screenshotImages.forEach((img, i) => {
      img.src = darkScreenshots[i];
      img.style.animation = 'none';
      img.offsetHeight; // trigger reflow
      img.style.animation = null;
    });
  });

  lightBtn.addEventListener('click', () => {
    toggleIndicator.classList.remove('left-1');
    toggleIndicator.classList.add('left-[calc(50%+2px)]');
    lightBtn.classList.add('text-white');
    lightBtn.classList.remove('text-gray-500');
    darkBtn.classList.remove('text-white');
    darkBtn.classList.add('text-gray-500');
    
    screenshotImages.forEach((img, i) => {
      img.src = lightScreenshots[i];
      img.style.animation = 'none';
      img.offsetHeight; // trigger reflow
      img.style.animation = null;
    });
  });
}
