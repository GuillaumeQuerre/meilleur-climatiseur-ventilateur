module.exports = {

  // ── FICHIER DE SORTIE ──────────────────────────────────────────────────────
  // Le fichier HTML sera généré dans /articles/
  outputFile: 'choisir-climatiseur-2025.html',

  // ── META SEO ───────────────────────────────────────────────────────────────
  meta: {
    title:       'Comment choisir son climatiseur en 2025 : le guide complet — MeilleurClim',
    description: 'Guide complet pour choisir votre climatiseur en 2025 : puissance, classe énergétique, marques recommandées, budget et conseils d\'installation. Mis à jour 2025.',
    canonical:   'https://meilleur-climatiseur-ventilateur.com/articles/choisir-climatiseur-2025.html',
    ogTitle:     'Comment choisir son climatiseur en 2025 : le guide complet',
    ogDesc:      'Guide complet pour choisir votre climatiseur en 2025 : puissance, classe énergétique, marques et budget.',
    datePublished:  '2025-06-15',
    dateModified:   '2026-03-08',
    section:        'Guide d\'achat',
  },

  // ── EN-TÊTE ARTICLE ────────────────────────────────────────────────────────
  badge:        '<span class="badge badge-primary">📖 Guide d\'achat</span>',
  dateDisplay:  '15 juin 2025',
  readTime:     '12 min de lecture',
  title:        'Comment choisir son climatiseur en 2025 : le guide complet',
  breadcrumb:   'Comment choisir son climatiseur en 2025',
  intro:        `Le marché des climatiseurs est saturé de modèles aux caractéristiques techniques complexes.
                 Ce guide vous donne les clés pour choisir le bon appareil selon votre logement, votre usage
                 et votre budget — sans vous perdre dans le jargon technique.`,

  // ── AUTEUR ─────────────────────────────────────────────────────────────────
  author: {
    avatar:  '👨‍🔧',
    name:    'Thomas Renard',
    role:    'Expert en climatisation — 8 ans d\'expérience',
    bio:     'Expert en climatisation & thermique du bâtiment depuis 2017. A analysé plus de 50 appareils.',
  },
  views:    '4 560',
  comments: '23',

  // ── SOMMAIRE ───────────────────────────────────────────────────────────────
  // id = ancre correspondant au h2 dans le body
  toc: [
    { id: 'type',         label: 'Quel type de climatiseur choisir ?' },
    { id: 'puissance',    label: 'Calculer la puissance nécessaire' },
    { id: 'energie',      label: 'Classe énergétique : ce qu\'il faut savoir' },
    { id: 'marques',      label: 'Quelles marques sont fiables ?' },
    { id: 'budget',       label: 'Quel budget prévoir ?' },
    { id: 'installation', label: 'L\'installation : ce qu\'il faut anticiper' },
    { id: 'verdict',      label: 'Notre recommandation' },
  ],

  // ── CONTENU PRINCIPAL ─────────────────────────────────────────────────────
  // HTML libre — utilisez toutes les classes du template (callout, data-table, checklist…)
  body: `
    <h2 id="type">1. Quel type de climatiseur choisir ?</h2>
    <p>Avant toute chose, vous devez choisir la <strong>technologie adaptée à votre situation</strong>. Il existe principalement trois types de climatiseurs sur le marché résidentiel.</p>

    <h3>Le climatiseur monosplit (notre recommandation)</h3>
    <p>C'est la solution la plus efficace et la plus silencieuse. Elle se compose d'une unité intérieure (qui souffle l'air froid) reliée à une unité extérieure (qui évacue la chaleur). L'installation nécessite un professionnel, mais les performances sont incomparables.</p>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Notre conseil</strong>
        <p>Si vous pouvez faire appel à un installateur et que vous prévoyez d'utiliser le climatiseur plusieurs saisons, le monosplit est systématiquement le meilleur choix. Le coût d'installation est récupéré en 2-3 étés grâce à la supériorité énergétique.</p>
      </div>
    </div>

    <h3>Le climatiseur portable</h3>
    <p>Facile à installer (il suffit de passer un conduit par une fenêtre), le climatiseur portable est une solution de dépannage. Il est cependant <strong>moins efficace, plus bruyant et plus énergivore</strong> qu'un split. À réserver si vous ne pouvez pas percer vos murs.</p>

    <h3>Le climatiseur réversible</h3>
    <p>Un climatiseur réversible peut également servir de chauffage en hiver. Il produit 3 à 5 fois plus d'énergie thermique qu'il n'en consomme en électricité. Si vous payez votre chauffage à l'électricité, l'économie peut être substantielle.</p>

    <h2 id="puissance">2. Calculer la puissance nécessaire</h2>
    <p>La puissance d'un climatiseur s'exprime en kilowatts (kW). Choisir une puissance inadaptée est l'erreur la plus courante : trop faible, l'appareil tourne en continu sans jamais rafraîchir correctement ; trop forte, il crée des cycles courts peu efficaces.</p>

    <table class="data-table">
      <thead>
        <tr><th>Surface (m²)</th><th>Logement bien isolé</th><th>Logement ancien</th><th>Pièce exposée plein sud</th></tr>
      </thead>
      <tbody>
        <tr><td>15 à 20 m²</td><td>1,5 à 2 kW</td><td>2 à 2,5 kW</td><td class="highlight">2,5 kW</td></tr>
        <tr><td>20 à 30 m²</td><td>2 à 2,5 kW</td><td>2,5 à 3 kW</td><td class="highlight">3 kW</td></tr>
        <tr><td>30 à 45 m²</td><td>2,5 à 3,5 kW</td><td>3,5 à 4 kW</td><td class="highlight">4 kW</td></tr>
        <tr><td>45 à 60 m²</td><td>4 à 5 kW</td><td>5 à 6 kW</td><td class="highlight">5,5 kW</td></tr>
      </tbody>
    </table>

    <div class="callout callout-warning">
      <div class="callout-icon">⚠️</div>
      <div class="callout-body">
        <strong>Attention</strong>
        <p>Ces valeurs sont indicatives. Consultez toujours un installateur professionnel qui réalisera un calcul thermique précis tenant compte de votre vitrage, isolation, hauteur sous plafond et nombre d'occupants.</p>
      </div>
    </div>

    <h2 id="energie">3. Classe énergétique : ce qu'il faut savoir</h2>
    <p>Depuis 2021, la réglementation européenne utilise une échelle de <strong>A+++ à G</strong> pour la consommation des climatiseurs, séparément pour le refroidissement (SEER) et le chauffage (SCOP).</p>
    <p>Un modèle A+++ consomme en moyenne <strong>50% moins d'électricité</strong> qu'un modèle A+ pour la même performance. Sur 10 ans d'utilisation, cela représente plusieurs centaines d'euros d'économies.</p>

    <ul class="checklist">
      <li>Un SEER supérieur à 8,5 correspond à la classe A+++</li>
      <li>Un SCOP supérieur à 5,1 correspond à la classe A+++ en chaud</li>
      <li>Les modèles Inverter modulant leur puissance sont toujours plus efficaces</li>
      <li>Évitez les modèles en dessous de la classe A+ (trop énergivores)</li>
    </ul>

    <h2 id="marques">4. Quelles marques sont fiables ?</h2>
    <p>Le marché est dominé par quelques acteurs reconnus pour leur fiabilité et leur service après-vente. Voici notre classement basé sur les retours professionnels et les comparatifs indépendants.</p>

    <div class="product-mini">
      <div class="product-mini-icon">🏆</div>
      <div class="product-mini-content">
        <h4>Daikin Perfera FTXM25R — Notre N°1</h4>
        <p>La référence absolue du marché. Efficacité A+++, silence 19 dB, filtration Flash Streamer.</p>
      </div>
      <div class="product-mini-price">
        <div class="price">749 €</div>
        <a href="../top3.html" class="btn btn-accent" style="padding:8px 16px;font-size:0.85rem;margin-top:8px">Voir la fiche →</a>
      </div>
    </div>

    <h2 id="budget">5. Quel budget prévoir ?</h2>
    <p>Le budget total comprend le prix de l'appareil ET l'installation. Voici les fourchettes réalistes en 2025 :</p>

    <table class="data-table">
      <thead>
        <tr><th>Budget total</th><th>Ce qu'on obtient</th><th>Notre avis</th></tr>
      </thead>
      <tbody>
        <tr><td>800 – 1 100 €</td><td>Entrée de gamme + installation basique</td><td>Acceptable pour usage occasionnel</td></tr>
        <tr><td>1 100 – 1 600 €</td><td>Bon milieu de gamme (A++) + installation standard</td><td>Bon compromis</td></tr>
        <tr><td><strong class="highlight">1 600 – 2 200 €</strong></td><td><strong>Excellent (A+++) + installation soignée</strong></td><td class="highlight">Recommandé ✓</td></tr>
        <tr><td>2 200 € +</td><td>Haut de gamme, multi-split</td><td>Pour grandes surfaces</td></tr>
      </tbody>
    </table>

    <h2 id="installation">6. L'installation : ce qu'il faut anticiper</h2>
    <p>L'installation d'un climatiseur monosplit est réglementée. Voici les points clés à anticiper avant d'acheter.</p>

    <div class="callout callout-info">
      <div class="callout-icon">ℹ️</div>
      <div class="callout-body">
        <strong>Obligation légale</strong>
        <p>En France, la manipulation des fluides frigorigènes est réservée aux techniciens titulaires d'une attestation d'aptitude délivrée par un organisme agréé. Faire installer son clim par un non-certifié est illégal et peut invalider votre garantie.</p>
      </div>
    </div>

    <ul>
      <li><strong>Accès à l'extérieur :</strong> L'unité extérieure doit pouvoir être fixée à un mur ou en toiture. En copropriété, l'accord de l'assemblée générale est souvent nécessaire.</li>
      <li><strong>Passage de tuyauteries :</strong> Un percement d'environ 70 mm de diamètre est nécessaire pour faire passer les liaisons frigorifiques.</li>
      <li><strong>Alimentation électrique :</strong> Un circuit dédié de 20A est recommandé pour les modèles jusqu'à 3,5 kW.</li>
      <li><strong>Distance intérieur/extérieur :</strong> Les liaisons standard font 3 mètres. Au-delà, un supplément est facturé.</li>
    </ul>

    <h2 id="verdict">7. Notre recommandation</h2>
    <p>Pour la grande majorité des appartements de 20 à 35 m², notre recommandation est claire : le <strong>Daikin Perfera 2,5 kW</strong>. Son excellent SEER (8,65), son silence de fonctionnement (19 dB) et sa durabilité éprouvée en font le meilleur investissement sur le long terme.</p>
    <p>Si votre budget est plus serré, le <strong>Mitsubishi Electric MSZ-AP25VGK</strong> à 699 € offre des performances quasi-identiques avec un avantage sur la garantie (7 ans).</p>
  `,

  // ── SCHÉMAS JSON-LD ───────────────────────────────────────────────────────
  // Tableau de schémas — chacun sera injecté dans une balise <script type="application/ld+json">
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Comment choisir son climatiseur en 2025 : le guide complet",
      "description": "Guide complet pour choisir votre climatiseur en 2025 : puissance, classe énergétique, marques recommandées, budget et conseils d'installation.",
      "datePublished": "2025-06-15",
      "dateModified": "2026-03-08",
      "author": {
        "@type": "Person",
        "name": "Thomas Renard",
        "jobTitle": "Expert en climatisation"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Meilleur Climatiseur Ventilateur",
        "url": "https://meilleur-climatiseur-ventilateur.com"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://meilleur-climatiseur-ventilateur.com/articles/choisir-climatiseur-2025.html"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://meilleur-climatiseur-ventilateur.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://meilleur-climatiseur-ventilateur.com/blog.html" },
        { "@type": "ListItem", "position": 3, "name": "Comment choisir son climatiseur en 2025" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quelle puissance de climatiseur pour 20 m² ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pour une pièce de 20 m² bien isolée, une puissance de 2 kW est généralement suffisante. Pour un logement ancien ou exposé plein sud, préférez 2,5 kW."
          }
        },
        {
          "@type": "Question",
          "name": "Vaut-il mieux un climatiseur réversible ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, dans la majorité des cas. Le surcoût à l'achat est rentabilisé dès la première saison de chauffe si vous remplacez un chauffage électrique, grâce à un SCOP de 4 à 5."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on installer un climatiseur soi-même ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non pour un split. La manipulation des fluides frigorigènes est réservée aux techniciens certifiés en France. Un climatiseur portable peut en revanche être installé sans professionnel."
          }
        }
      ]
    }
  ],

  // ── ARTICLES CONNEXES (3 obligatoires) ────────────────────────────────────
  related: [
    {
      href:       'dyson-am07-test.html',
      imgBg:      'background:linear-gradient(135deg,var(--primary),var(--accent))',
      imgEmoji:   '💨',
      badge:      '<span class="badge badge-accent" style="font-size:0.75rem;margin-bottom:8px">Ventilateurs</span>',
      title:      'Dyson AM07 : vaut-il vraiment 500€ ?',
    },
    {
      href:       'consommation-electrique-clim.html',
      imgBg:      'background:linear-gradient(135deg,#059669,#10b981)',
      imgEmoji:   '🔋',
      badge:      '<span class="badge" style="background:rgba(5,150,105,0.12);color:#059669;font-size:0.75rem;margin-bottom:8px">Énergie</span>',
      title:      'Combien coûte un clim à l\'heure en 2025 ?',
    },
    {
      href:       '../top3.html',
      imgBg:      'background:linear-gradient(135deg,#f59e0b,#f97316)',
      imgEmoji:   '🏆',
      badge:      '<span class="badge badge-warm" style="font-size:0.75rem;margin-bottom:8px">Comparatif</span>',
      title:      'Top 3 meilleurs climatiseurs 2025',
    },
  ],

};
