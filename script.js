/* =====================================================
   DHMod Store — script.js
   Premium JavaScript: data, animations, interactivity
   ===================================================== */

'use strict';

// =====================================================
// DATA
// =====================================================
const APPS = [
  { id:1, name:'Nova Launcher Pro', category:'Tools', icon:'🚀', color:'linear-gradient(135deg,#6a5cff,#00d4ff)', badge:'mod', rating:4.9, downloads:'8.2M', desc:'Fully customizable home screen replacement with premium themes, gesture controls, and performance tweaks.' },
  { id:2, name:'StreamX Ultra', category:'Streaming', icon:'🎬', color:'linear-gradient(135deg,#ff6b6b,#ffa34d)', badge:'premium', rating:4.8, downloads:'5.4M', desc:'Watch any content offline with unlimited downloads and zero ads on all major streaming services.' },
  { id:3, name:'GameGuardian Pro', category:'Gaming', icon:'🎮', color:'linear-gradient(135deg,#43e97b,#38f9d7)', badge:'mod', rating:4.7, downloads:'12.1M', desc:'Advanced game memory editor with unlimited coins, gems, and premium currency for 500+ games.' },
  { id:4, name:'SocialBoost X', category:'Social', icon:'💡', color:'linear-gradient(135deg,#f953c6,#b91d73)', badge:'free', rating:4.6, downloads:'3.8M', desc:'Unlock hidden social media features, schedule posts, and get detailed analytics for your profiles.' },
  { id:5, name:'VaultPass Premium', category:'Productivity', icon:'🔐', color:'linear-gradient(135deg,#4facfe,#00f2fe)', badge:'premium', rating:4.9, downloads:'2.1M', desc:'Military-grade encrypted password manager with auto-fill, breach alerts, and dark web monitoring.' },
  { id:6, name:'BeatSync Studio', category:'Entertainment', icon:'🎵', color:'linear-gradient(135deg,#f7971e,#ffd200)', badge:'mod', rating:4.8, downloads:'6.7M', desc:'Premium music production suite with studio-quality effects, AI mastering, and unlimited exports.' },
  { id:7, name:'PixelVault Editor', category:'Tools', icon:'🎨', color:'linear-gradient(135deg,#a18cd1,#fbc2eb)', badge:'premium', rating:4.7, downloads:'4.2M', desc:'Professional photo and video editor with AI filters, background removal, and RAW file support.' },
  { id:8, name:'CloudDrive MAX', category:'Productivity', icon:'☁️', color:'linear-gradient(135deg,#6a5cff,#38f9d7)', badge:'mod', rating:4.5, downloads:'9.3M', desc:'Unlimited cloud storage with end-to-end encryption, automatic backup, and real-time sync.' },
];

const MODS = [
  { name:'Minecraft PE God Mode', cat:'Gaming', icon:'⛏️', downloads:'4.2M', rating:'4.9' },
  { name:'Spotify++ Unlocked', cat:'Entertainment', icon:'🎵', downloads:'11M', rating:'4.8' },
  { name:'YouTube Premium Mod', cat:'Streaming', icon:'📺', downloads:'18M', rating:'4.9' },
  { name:'WhatsApp Plus Dark', cat:'Social', icon:'💬', downloads:'7.6M', rating:'4.7' },
  { name:'Adobe CC Cracked', cat:'Productivity', icon:'🎨', downloads:'3.1M', rating:'4.6' },
  { name:'PUBG Aimbot Lite', cat:'Gaming', icon:'🎯', downloads:'5.8M', rating:'4.5' },
  { name:'Netflix UHD Bypass', cat:'Streaming', icon:'🎬', downloads:'9.2M', rating:'4.8' },
  { name:'TikTok NoWatermark', cat:'Social', icon:'🎶', downloads:'6.4M', rating:'4.6' },
  { name:'Minecraft PE God Mode', cat:'Gaming', icon:'⛏️', downloads:'4.2M', rating:'4.9' },
  { name:'Spotify++ Unlocked', cat:'Entertainment', icon:'🎵', downloads:'11M', rating:'4.8' },
  { name:'YouTube Premium Mod', cat:'Streaming', icon:'📺', downloads:'18M', rating:'4.9' },
  { name:'WhatsApp Plus Dark', cat:'Social', icon:'💬', downloads:'7.6M', rating:'4.7' },
];

const TESTIMONIALS = [
  { name:'Alex Rivera', handle:'@alexmod', avatar:'https://i.pravatar.cc/48?img=12', rating:5, text:'DHMod Store completely changed how I discover apps. Every mod works perfectly and the download speeds are insane. 100% legit.' },
  { name:'Sarah Chen', handle:'@sxchen', avatar:'https://i.pravatar.cc/48?img=21', rating:5, text:'Been using this store for 2 years now. The curation is top-tier — every app is tested and safe. My go-to for premium mods.' },
  { name:'Marcus T.', handle:'@marcust', avatar:'https://i.pravatar.cc/48?img=33', rating:5, text:'Found GameGuardian here and it works flawlessly. The team updates mods within hours of any patches. Unbelievable service.' },
  { name:'Priya Sharma', handle:'@priyatech', avatar:'https://i.pravatar.cc/48?img=44', rating:5, text:'Clean UI, blazing fast downloads, and zero ads. DHMod Store is the Apple App Store of the modding world. Period.' },
  { name:'Jordan Lee', handle:'@jordanl', avatar:'https://i.pravatar.cc/48?img=57', rating:5, text:'The search feature helps me find exactly what I want in seconds. And every single file passes their safety checks. Love it.' },
  { name:'Omar Hassan', handle:'@omarh_', avatar:'https://i.pravatar.cc/48?img=68', rating:5, text:'Switched from sketchy APK sites to DHMod and never looked back. Professional, safe, and updated constantly. 10/10.' },
];

// =====================================================
// LOADER
// =====================================================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('done');
  }, 2000);
});

// =====================================================
// PARTICLES CANVAS
// =====================================================
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.5 ? '#6a5cff' : '#00d4ff';
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 6;
    ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

for (let i = 0; i < 80; i++) particles.push(new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.save();
        ctx.globalAlpha = (1 - dist / 120) * 0.12;
        ctx.strokeStyle = '#6a5cff';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
        ctx.restore();
      }
    }
    particles[i].update();
    particles[i].draw();
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// =====================================================
// MOUSE GLOW
// =====================================================
const mouseGlow = document.getElementById('mouse-glow');
document.addEventListener('mousemove', (e) => {
  mouseGlow.style.left = e.clientX + 'px';
  mouseGlow.style.top = e.clientY + 'px';
});

// =====================================================
// NAVBAR
// =====================================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  document.getElementById('back-to-top').classList.toggle('visible', window.scrollY > 400);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// =====================================================
// THEME TOGGLE
// =====================================================
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});

// =====================================================
// SMOOTH SCROLL
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// =====================================================
// BACK TO TOP
// =====================================================
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =====================================================
// REVEAL ON SCROLL
// =====================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-right').forEach(el => revealObserver.observe(el));

// =====================================================
// RENDER FEATURED APPS
// =====================================================
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) {
      html += `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#ffd200" stroke="none"/></svg>`;
    } else if (i === full && half) {
      html += `<svg viewBox="0 0 24 24"><defs><linearGradient id="hg${i}"><stop offset="50%" stop-color="#ffd200"/><stop offset="50%" stop-color="#444"/></linearGradient></defs><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#hg${i})" stroke="none"/></svg>`;
    } else {
      html += `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#2a2e44" stroke="none"/></svg>`;
    }
  }
  return html;
}

function getBadgeLabel(badge) {
  return { free: 'Free', mod: 'MOD', premium: 'PRO' }[badge] || badge;
}

function renderApps(data) {
  const grid = document.getElementById('apps-grid');
  grid.innerHTML = '';
  data.forEach((app, i) => {
    const card = document.createElement('div');
    card.className = 'app-card reveal';
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="app-card-top">
        <div class="app-icon-wrap" style="background:${app.color}">
          <span>${app.icon}</span>
        </div>
        <div class="app-meta">
          <div class="app-name">${app.name}</div>
          <div class="app-category">${app.category}</div>
        </div>
        <span class="app-badge badge-${app.badge}">${getBadgeLabel(app.badge)}</span>
      </div>
      <p class="app-desc">${app.desc}</p>
      <div class="app-card-footer">
        <div class="stars">
          ${renderStars(app.rating)}
          <span>${app.rating}</span>
        </div>
        <button class="download-btn" onclick="event.stopPropagation()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Get
        </button>
      </div>
    `;
    card.addEventListener('click', () => openModal(app));
    grid.appendChild(card);
    revealObserver.observe(card);
  });
}

renderApps(APPS);

// =====================================================
// CAROUSEL (TRENDING MODS)
// =====================================================
function renderCarousel() {
  const track = document.getElementById('carousel-track');
  const doubled = [...MODS, ...MODS]; // duplicate for seamless loop
  track.innerHTML = doubled.map(mod => `
    <div class="mod-card">
      <div class="mod-trending-badge">🔥 Hot</div>
      <div class="mod-card-top">
        <div class="mod-icon">${mod.icon}</div>
        <div class="mod-info">
          <h4>${mod.name}</h4>
          <p>${mod.cat}</p>
        </div>
      </div>
      <div class="mod-stats">
        <div class="mod-stat">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <strong>${mod.downloads}</strong> downloads
        </div>
        <div class="mod-stat">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffd200"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <strong>${mod.rating}</strong>
        </div>
      </div>
    </div>
  `).join('');
}
renderCarousel();

// =====================================================
// STATS COUNTER
// =====================================================
function formatNumber(n, target, suffix) {
  if (target >= 1000000) {
    return (n / 1000000).toFixed(1) + suffix;
  }
  if (target === 49) return (n / 10).toFixed(1) + suffix;
  return Math.floor(n).toLocaleString() + suffix;
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();
  const update = (now) => {
    const elapsed = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - elapsed, 3);
    const current = eased * target;
    el.textContent = formatNumber(current, target, suffix);
    if (elapsed < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number').forEach(animateCounter);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statsSection = document.getElementById('stats');
if (statsSection) statsObserver.observe(statsSection);

// =====================================================
// TESTIMONIALS SLIDER
// =====================================================
function renderTestimonials() {
  const track = document.getElementById('testi-track');
  const dotsContainer = document.getElementById('testi-dots');

  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testi-card">
      <div class="testi-top">
        <img class="testi-avatar" src="${t.avatar}" alt="${t.name}" />
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-handle">${t.handle}</div>
        </div>
      </div>
      <div class="testi-stars">
        ${Array(t.rating).fill('<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>').join('')}
      </div>
      <p class="testi-text">${t.text}</p>
    </div>
  `).join('');

  let perPage = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  let current = 0;
  const total = Math.ceil(TESTIMONIALS.length / perPage);

  dotsContainer.innerHTML = Array(total).fill(0).map((_, i) =>
    `<button class="testi-dot${i===0?' active':''}" data-i="${i}"></button>`
  ).join('');

  function goTo(i) {
    current = i;
    const cards = track.querySelectorAll('.testi-card');
    const cardW = cards[0] ? cards[0].offsetWidth + 24 : 0;
    track.style.transform = `translateX(-${i * perPage * cardW}px)`;
    dotsContainer.querySelectorAll('.testi-dot').forEach((d, di) => {
      d.classList.toggle('active', di === i);
    });
  }

  dotsContainer.querySelectorAll('.testi-dot').forEach(d => {
    d.addEventListener('click', () => goTo(parseInt(d.dataset.i)));
  });

  // Auto-slide
  let autoSlide = setInterval(() => {
    goTo((current + 1) % total);
  }, 4500);

  track.parentElement.addEventListener('mouseenter', () => clearInterval(autoSlide));
  track.parentElement.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => goTo((current + 1) % total), 4500);
  });

  window.addEventListener('resize', () => {
    perPage = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    goTo(0);
  });
}
renderTestimonials();

// =====================================================
// SEARCH
// =====================================================
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const allItems = [...APPS.map(a => ({ ...a, type: 'app' })), ...MODS.slice(0, 8).map(m => ({ name: m.name, category: m.cat, icon: m.icon, type: 'mod' }))];

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { searchResults.classList.remove('active'); return; }

  const matches = allItems.filter(i => i.name.toLowerCase().includes(q) || i.category.toLowerCase().includes(q)).slice(0, 5);

  if (!matches.length) {
    searchResults.innerHTML = '<div class="search-result-item"><span class="sri-icon">🔍</span><span class="sri-name">No results found</span></div>';
  } else {
    searchResults.innerHTML = matches.map(m => `
      <div class="search-result-item" data-id="${m.id || ''}">
        <span class="sri-icon">${m.icon}</span>
        <div>
          <div class="sri-name">${m.name}</div>
          <div class="sri-cat">${m.category} · ${m.type === 'mod' ? 'MOD' : 'App'}</div>
        </div>
      </div>
    `).join('');

    searchResults.querySelectorAll('.search-result-item').forEach((item, idx) => {
      item.addEventListener('click', () => {
        searchResults.classList.remove('active');
        searchInput.value = '';
        if (matches[idx].type === 'app') {
          openModal(APPS.find(a => a.id === matches[idx].id));
        } else {
          document.getElementById('trending').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  searchResults.classList.add('active');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrap')) {
    searchResults.classList.remove('active');
  }
});

// =====================================================
// APP MODAL
// =====================================================
const modal = document.getElementById('app-modal');
const modalClose = document.getElementById('modal-close');
const modalContent = document.getElementById('modal-content');

function openModal(app) {
  modalContent.innerHTML = `
    <div class="modal-app-icon" style="background:${app.color}">${app.icon}</div>
    <div class="modal-app-name">${app.name}</div>
    <div class="modal-app-category">${app.category} · <span style="color:var(--accent)">${getBadgeLabel(app.badge)}</span></div>
    <p class="modal-app-desc">${app.desc} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ensuring premium experience.</p>
    <div class="modal-meta">
      <div class="modal-meta-item">
        <strong>${app.rating} ⭐</strong>
        <span>Rating</span>
      </div>
      <div class="modal-meta-item">
        <strong>${app.downloads}</strong>
        <span>Downloads</span>
      </div>
      <div class="modal-meta-item">
        <strong>v${(Math.random()*3+1).toFixed(1)}.0</strong>
        <span>Version</span>
      </div>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="triggerDownload()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Now
      </button>
      <button class="btn btn-ghost" onclick="document.getElementById('app-modal').classList.remove('active')">Cancel</button>
    </div>
  `;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

window.triggerDownload = function() {
  const btn = modalContent.querySelector('.btn-primary');
  const original = btn.innerHTML;
  btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Download Starting...`;
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = original;
    btn.disabled = false;
    closeModal();
  }, 2000);
};

// =====================================================
// NEWSLETTER
// =====================================================
document.getElementById('nl-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const input = e.target.querySelector('input');
  const originalHTML = btn.innerHTML;
  btn.innerHTML = `✅ Subscribed!`;
  btn.style.background = 'linear-gradient(135deg,#43e97b,#38f9d7)';
  input.value = '';
  setTimeout(() => {
    btn.innerHTML = originalHTML;
    btn.style.background = '';
  }, 3000);
});

// =====================================================
// CATEGORY FILTER
// =====================================================
document.querySelectorAll('.cat-card').forEach(card => {
  card.addEventListener('click', () => {
    const cat = card.dataset.cat;
    const filtered = APPS.filter(a => a.category === cat);
    renderApps(filtered.length ? filtered : APPS);
    document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });

    // Highlight active
    document.querySelectorAll('.cat-card').forEach(c => c.style.borderColor = '');
    card.style.borderColor = 'var(--primary)';
  });
});

// =====================================================
// DOWNLOAD BTN RIPPLE
// =====================================================
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.download-btn, .btn-primary');
  if (!btn) return;
  const ripple = document.createElement('span');
  ripple.style.cssText = `
    position:absolute;
    border-radius:50%;
    background:rgba(255,255,255,0.3);
    transform:scale(0);
    animation:rippleAnim 0.6s linear;
    pointer-events:none;
    width:60px;height:60px;
    margin-left:-30px;margin-top:-30px;
    left:${e.clientX - btn.getBoundingClientRect().left}px;
    top:${e.clientY - btn.getBoundingClientRect().top}px;
  `;
  if (!document.getElementById('ripple-style')) {
    const s = document.createElement('style');
    s.id = 'ripple-style';
    s.textContent = '@keyframes rippleAnim{to{transform:scale(4);opacity:0}}';
    document.head.appendChild(s);
  }
  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
});

console.log('%c DHMod Store ', 'background:linear-gradient(135deg,#6a5cff,#00d4ff);color:#fff;font-size:20px;padding:10px 20px;border-radius:8px;font-weight:bold;');
console.log('%c Premium App & Mod Marketplace', 'color:#6a5cff;font-size:12px;');
