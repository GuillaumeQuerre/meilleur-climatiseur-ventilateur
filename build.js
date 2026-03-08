#!/usr/bin/env node
// ============================================================
//  build.js — Générateur d'articles
//
//  Usage :
//    node build.js                  → génère tous les articles
//    node build.js mon-article.js   → génère un seul article
//
//  Structure attendue :
//    article-template.html          → template maître
//    articles/                      → fichiers de données (.js)
//    generated/                     → HTML générés (à déployer)
// ============================================================

const fs   = require('fs');
const path = require('path');

const TEMPLATE_PATH  = path.join(__dirname, 'article-template.html');
const ARTICLES_DIR   = path.join(__dirname, 'articles');
const OUTPUT_DIR     = path.join(__dirname, 'generated');

// ── Crée le dossier de sortie si nécessaire ──────────────────
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// ── Charge le template ───────────────────────────────────────
const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// ── Détermine les articles à générer ────────────────────────
const args = process.argv.slice(2);
let files;
if (args.length > 0) {
  files = args.map(f => path.basename(f));
} else {
  files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.js'));
}

let generated = 0;
let errors    = 0;

files.forEach(file => {
  const filePath = path.join(ARTICLES_DIR, file);
  if (!fs.existsSync(filePath)) {
    console.error(`  ✗ Fichier introuvable : ${file}`);
    errors++;
    return;
  }

  try {
    // Purge le cache require pour permettre le re-build
    delete require.cache[require.resolve(filePath)];
    const data = require(filePath);

    const html = buildArticle(template, data);
    const outFile = path.join(OUTPUT_DIR, data.outputFile);
    fs.writeFileSync(outFile, html, 'utf8');

    console.log(`  ✓ ${data.outputFile}  (${Math.round(html.length / 1024)} ko)`);
    generated++;

  } catch (err) {
    console.error(`  ✗ Erreur sur ${file} : ${err.message}`);
    errors++;
  }
});

console.log(`\n${generated} article(s) généré(s)${errors ? `, ${errors} erreur(s)` : ''}.`);

// ============================================================
//  Fonction de build d'un article
// ============================================================
function buildArticle(tpl, d) {
  let html = tpl;

  // ── Schémas JSON-LD ─────────────────────────────────────
  const schemasHtml = (d.schemas || [])
    .map(s => `<script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n</script>`)
    .join('\n  ');

  // ── Sommaire (toc-list et sidebar-toc) ──────────────────
  const tocItems = (d.toc || [])
    .map(item => `<li><a href="#${item.id}">${item.label}</a></li>`)
    .join('\n            ');

  const sidebarToc = (d.toc || [])
    .map(item => `<li><a href="#${item.id}">${item.label}</a></li>`)
    .join('\n            ');

  // ── Articles connexes ────────────────────────────────────
  const relatedHtml = (d.related || [])
    .map(r => `
            <a href="${r.href}" class="related-card">
              <div class="related-img" style="${r.imgBg}">${r.imgEmoji}</div>
              <div class="related-content">
                ${r.badge}
                <h4>${r.title}</h4>
              </div>
            </a>`).join('');

  // ── Remplacement des variables ───────────────────────────
  const replacements = {
    '{{META_TITLE}}':        d.meta.title,
    '{{META_DESCRIPTION}}':  d.meta.description,
    '{{META_CANONICAL}}':    d.meta.canonical,
    '{{OG_TITLE}}':          d.meta.ogTitle     || d.meta.title,
    '{{OG_DESCRIPTION}}':    d.meta.ogDesc      || d.meta.description,
    '{{DATE_ISO}}':          d.meta.datePublished,
    '{{DATE_MODIFIED_ISO}}': d.meta.dateModified || d.meta.datePublished,
    '{{ARTICLE_SECTION}}':   d.meta.section      || 'Guide',
    '{{SCHEMA_JSON}}':       schemasHtml,
    '{{BREADCRUMB_TITLE}}':  d.breadcrumb        || d.title,
    '{{BADGE}}':             d.badge             || '',
    '{{DATE_DISPLAY}}':      d.dateDisplay,
    '{{READ_TIME}}':         d.readTime,
    '{{ARTICLE_TITLE}}':     d.title,
    '{{ARTICLE_INTRO}}':     d.intro.trim(),
    '{{AUTHOR_AVATAR}}':     d.author.avatar,
    '{{AUTHOR_NAME}}':       d.author.name,
    '{{AUTHOR_ROLE}}':       d.author.role,
    '{{AUTHOR_BIO}}':        d.author.bio        || d.author.role,
    '{{VIEWS}}':             d.views             || '—',
    '{{COMMENTS}}':          d.comments          || '0',
    '{{TOC_ITEMS}}':         tocItems,
    '{{SIDEBAR_TOC}}':       sidebarToc,
    '{{ARTICLE_BODY}}':      d.body.trim(),
    '{{RELATED_ARTICLES}}':  relatedHtml,
  };

  Object.entries(replacements).forEach(([key, val]) => {
    html = html.split(key).join(val ?? '');
  });

  return html;
}
