// ===== SHARED COMPONENTS =====

const NAV_HTML = `
<header>
  <nav class="container">
    <a href="index.html" class="logo">
      <div class="logo-icon">❄️</div>
      Meilleur<span>CV</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Accueil</a></li>
      <li class="nav-dropdown">
        <a href="#" class="nav-dropdown-toggle">Top Produits ▾</a>
        <ul class="dropdown-menu">
          <li><a href="top3-climatiseurs.html">❄️ Meilleurs climatiseurs</a></li>
          <li><a href="top3-ventilateurs.html">💨 Meilleurs ventilateurs</a></li>
          <li><a href="top3-climatiseurs-ecologiques.html">🌿 Meilleurs climatiseurs écologiques</a></li>
        </ul>
      </li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="top3-climatiseurs.html" class="nav-cta">Voir les Tops →</a></li>
    </ul>
    <div class="hamburger" onclick="toggleMenu()">☰</div>
  </nav>
</header>
<div class="mobile-menu" id="mobileMenu">
  <ul>
    <li><a href="index.html" onclick="toggleMenu()">Accueil</a></li>
    <li><a href="top3-climatiseurs.html" onclick="toggleMenu()">❄️ Meilleurs climatiseurs</a></li>
    <li><a href="top3-ventilateurs.html" onclick="toggleMenu()">💨 Meilleurs ventilateurs</a></li>
    <li><a href="top3-climatiseurs-ecologiques.html" onclick="toggleMenu()">🌿 Climatiseurs écologiques</a></li>
    <li><a href="blog.html" onclick="toggleMenu()">Blog</a></li>
  </ul>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">Meilleur<span>CV</span></div>
        <p class="footer-desc">Le guide indépendant pour choisir votre climatiseur ou ventilateur. Comparatifs, tests et conseils d'experts.</p>
        <div style="display:flex;gap:12px">
          <a href="#" style="color:rgba(255,255,255,0.5);font-size:1.2rem;transition:color 0.2s" onmouseover="this.style.color='#00c9b1'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">𝕏</a>
          <a href="#" style="color:rgba(255,255,255,0.5);font-size:1.2rem;transition:color 0.2s" onmouseover="this.style.color='#00c9b1'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">📘</a>
          <a href="#" style="color:rgba(255,255,255,0.5);font-size:1.2rem;transition:color 0.2s" onmouseover="this.style.color='#00c9b1'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">📸</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Top Produits</h4>
        <ul>
          <li><a href="top3.html">Meilleur climatiseur 2026</a></li>
          <li><a href="top3.html">Meilleur ventilateur 2026</a></li>
          <li><a href="top3.html">Climatiseur portable</a></li>
          <li><a href="top3.html">Ventilateur sans pales</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Blog & Guides</h4>
        <ul>
          <li><a href="blog.html">Tous les articles</a></li>
          <li><a href="article.html">Conseils d'achat</a></li>
          <li><a href="article.html">Installation</a></li>
          <li><a href="article.html">Économies d'énergie</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Infos</h4>
        <ul>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Mentions légales</a></li>
          <li><a href="#">Politique de confidentialité</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 meilleur-climatiseur-ventilateur.com — Tous droits réservés</p>
      <div class="footer-links">
        <a href="#">Mentions légales</a>
        <a href="#">CGU</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </div>
</footer>
`;

// Mobile menu styles
const mobileMenuStyles = `
<style>
.mobile-menu {
  display: none;
  position: fixed; top: 68px; left: 0; right: 0; z-index: 99;
  background: white; border-bottom: 1px solid var(--border);
  padding: 16px 24px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}
.mobile-menu.open { display: block; }
.mobile-menu ul { list-style: none; }
.mobile-menu ul li { padding: 12px 0; border-bottom: 1px solid var(--border); }
.mobile-menu ul li:last-child { border: none; }
.mobile-menu ul a { font-size: 1.1rem; font-weight: 500; color: var(--text); }
/* Dropdown nav */
.nav-dropdown { position: relative; }
.nav-dropdown-toggle { cursor: pointer; }
.dropdown-menu {
  display: none; position: absolute; top: calc(100% + 8px); left: 50%;
  transform: translateX(-50%);
  background: white; border: 1px solid var(--border);
  border-radius: var(--radius-sm); box-shadow: 0 12px 32px rgba(0,0,0,0.12);
  min-width: 240px; list-style: none; padding: 8px 0; z-index: 200;
}
.nav-dropdown:hover .dropdown-menu { display: block; }
.dropdown-menu li { padding: 0; border: none !important; }
.dropdown-menu a {
  display: block; padding: 11px 20px; font-size: 0.92rem !important;
  font-weight: 500 !important; color: var(--text) !important;
  transition: background var(--transition);
}
.dropdown-menu a:hover { background: var(--bg); color: var(--primary) !important; }
</style>
`;

// Inject shared components
document.addEventListener('DOMContentLoaded', () => {
  // Inject mobile menu styles
  document.head.insertAdjacentHTML('beforeend', mobileMenuStyles);

  // Inject nav at top of body
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Inject footer at end of body
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
