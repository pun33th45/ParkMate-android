/* ═══════════════════════════════════════════════════════════
   ParkMate — script.js
   Animations, interactions, and dynamic effects
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ── NAVBAR ── */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');
let mobileOpen = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

hamburger.addEventListener('click', () => {
  mobileOpen = !mobileOpen;
  navMobile.style.display = mobileOpen ? 'flex' : 'none';
  const spans = hamburger.querySelectorAll('span');
  if (mobileOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

// Close mobile nav on link click
navMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileOpen = false;
    navMobile.style.display = 'none';
    hamburger.querySelectorAll('span').forEach(s => {
      s.style.transform = '';
      s.style.opacity = '';
    });
  });
});

/* ── REVEAL ON SCROLL ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings
      const siblings = entry.target.parentElement.querySelectorAll('.reveal');
      let delay = 0;
      siblings.forEach((sib, idx) => {
        if (sib === entry.target) delay = idx * 80;
      });
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── COUNTER ANIMATION ── */
function animateCounter(el, target, duration = 1800) {
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('[data-target]');
      nums.forEach(num => {
        animateCounter(num, parseInt(num.dataset.target));
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) counterObserver.observe(heroStats);

/* ── PARTICLES ── */
const particleContainer = document.getElementById('particles');

function createParticle() {
  const p = document.createElement('div');
  p.className = 'particle';
  const x = Math.random() * 100;
  const size = Math.random() * 3 + 1.5;
  const dur = Math.random() * 8 + 6;
  const delay = Math.random() * 6;
  const opacity = Math.random() * 0.35 + 0.1;

  const colors = ['rgba(107,174,150,0.6)', 'rgba(91,79,232,0.4)', 'rgba(107,174,150,0.4)', 'rgba(136,196,170,0.5)'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  p.style.cssText = `
    left: ${x}%;
    bottom: ${Math.random() * 30}%;
    width: ${size}px;
    height: ${size}px;
    animation-duration: ${dur}s;
    animation-delay: ${delay}s;
    opacity: ${opacity};
    background: ${color};
    border-radius: 50%;
  `;

  particleContainer.appendChild(p);

  setTimeout(() => p.remove(), (dur + delay) * 1000);
}

// Spawn particles periodically
if (particleContainer) {
  for (let i = 0; i < 20; i++) createParticle();
  setInterval(() => {
    if (particleContainer.children.length < 30) createParticle();
  }, 600);
}

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── ACTIVE NAV LINK ON SCROLL ── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = '';
        if (a.getAttribute('href') === `#${id}`) {
          a.style.color = 'var(--cyan)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ── FEATURE CARDS TILT ── */
document.querySelectorAll('.feat-card, .vision-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `
      translateY(-4px)
      rotateX(${-y * 6}deg)
      rotateY(${x * 6}deg)
    `;
    card.style.transition = 'transform 0.1s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.4s ease';
  });
});

/* ── STEPS PROGRESSIVE HIGHLIGHT ── */
const steps = document.querySelectorAll('.step');
const stepObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelector('.step-num').style.background = 'linear-gradient(135deg, #6BAE96 0%, #4A9278 100%)';
      entry.target.querySelector('.step-num').style.color = '#fff';
      entry.target.querySelector('.step-num').style.boxShadow = '0 4px 20px rgba(107,174,150,0.4)';
      entry.target.querySelector('.step-num').style.borderColor = 'transparent';
    }
  });
}, { threshold: 0.8 });
steps.forEach(s => stepObserver.observe(s));

/* ── CHART BARS ANIMATION ── */
const chartObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.bar');
      bars.forEach((bar, i) => {
        const targetHeight = bar.style.height;
        bar.style.height = '0%';
        setTimeout(() => {
          bar.style.transition = 'height 0.6s cubic-bezier(0.25,0.8,0.25,1)';
          bar.style.height = targetHeight;
        }, i * 80);
      });
      chartObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.feat-chart').forEach(c => chartObserver.observe(c));

/* ── TYPING EFFECT (hero headline) ── */
// Add a subtle cursor blink to the gradient text
const gradText = document.querySelector('.hero-headline .gradient-text');
if (gradText) {
  gradText.style.opacity = '0';
  setTimeout(() => {
    gradText.style.transition = 'opacity 0.8s ease 0.4s';
    gradText.style.opacity = '1';
  }, 300);
}

/* ── QR BOX SCAN LINE ── */
const qrBox = document.querySelector('.qr-box');
if (qrBox) {
  const scanLine = document.createElement('div');
  scanLine.style.cssText = `
    position: absolute; left: 10px; right: 10px; height: 2px;
    background: linear-gradient(90deg, transparent, var(--cyan), transparent);
    border-radius: 1px;
    animation: qrScan 2.5s ease-in-out infinite;
    z-index: 5;
  `;
  const style = document.createElement('style');
  style.textContent = `
    @keyframes qrScan {
      0% { top: 8px; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { top: calc(100% - 8px); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
  qrBox.appendChild(scanLine);
}

/* ── COMPARE CARD HOVER ── */
document.querySelectorAll('.compare-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    if (card.classList.contains('new')) {
      card.style.boxShadow = '0 0 60px rgba(0,212,255,0.15)';
    }
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
  });
});

/* ── CITY CARD STAT BAR ANIMATE ── */
const cityCardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.c-stat-fill');
      if (fill) {
        fill.style.width = '0';
        setTimeout(() => {
          fill.style.transition = 'width 1.5s cubic-bezier(0.25,0.8,0.25,1)';
          fill.style.width = '72%';
        }, 200);
      }
      cityCardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.city-card').forEach(c => cityCardObserver.observe(c));

/* ── APK DOWNLOAD LINK — now live at pun33th45.itch.io/parkmate-beta ── */

/* ── VISION CARDS STAGGER ── */
const visionObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = document.querySelectorAll('.vision-card');
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 120);
      });
      visionObs.disconnect();
    }
  });
}, { threshold: 0.1 });

const visionGrid = document.querySelector('.vision-grid');
if (visionGrid) visionObs.observe(visionGrid);

/* ── LOGO HOVER SHIMMER ── */
document.querySelectorAll('.nav-logo').forEach(logo => {
  logo.addEventListener('mouseenter', () => {
    logo.querySelector('.logo-text').style.background = 'linear-gradient(135deg, #00d4ff 0%, #6c5ce7 100%)';
    logo.querySelector('.logo-text').style.webkitBackgroundClip = 'text';
    logo.querySelector('.logo-text').style.webkitTextFillColor = 'transparent';
    logo.querySelector('.logo-text').style.backgroundClip = 'text';
  });
  logo.addEventListener('mouseleave', () => {
    logo.querySelector('.logo-text').style.background = '';
    logo.querySelector('.logo-text').style.webkitBackgroundClip = '';
    logo.querySelector('.logo-text').style.webkitTextFillColor = '';
    logo.querySelector('.logo-text').style.backgroundClip = '';
  });
});

/* ── MAP PINS PULSE STAGGER ── */
document.querySelectorAll('.map-pin').forEach((pin, i) => {
  const dot = pin.querySelector('.pin-dot');
  if (dot) {
    dot.style.animationDelay = `${i * 0.8}s`;
  }
});

/* ── BOOT: set initial chart bar heights to 0 for animation ── */
document.querySelectorAll('.bar').forEach(bar => {
  const h = bar.style.height;
  bar.dataset.height = h;
  // Don't reset here, let chartObserver do it
});

console.log('%c🚗 ParkMate — Park Smarter. Move Faster.', 'color: #6BAE96; font-size: 16px; font-weight: bold; font-family: monospace;');
console.log('%cBeta v1.0 | Built for smart cities', 'color: #5B4FE8; font-size: 12px; font-family: monospace;');
