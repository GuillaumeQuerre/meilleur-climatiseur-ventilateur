# Meilleur Climatiseur & Ventilateur — Site statique

Site de comparaison de climatiseurs et ventilateurs, déployé via GitHub Pages.

## Structure des fichiers

```
/
├── index.html          # Page d'accueil
├── top3.html           # Page Top 3 produits (page principale)
├── blog.html           # Liste des articles du blog
├── article.html        # Template article de blog (à dupliquer)
├── css/
│   └── style.css       # CSS partagé (variables, composants, layout)
├── js/
│   └── components.js   # Header/footer injectés en JS + animations
└── .nojekyll           # Désactive Jekyll sur GitHub Pages
```

## Déploiement sur GitHub Pages

### Étape 1 — Créer le dépôt GitHub

1. Allez sur [github.com](https://github.com) → **New repository**
2. Nom du repo : `meilleur-climatiseur-ventilateur` (ou ce que vous voulez)
3. Visibilité : **Public** (obligatoire pour GitHub Pages gratuit)
4. Cliquez **Create repository**

### Étape 2 — Uploader les fichiers

Option A (interface web) :
```
Glissez-déposez tous les fichiers dans l'interface GitHub
(en cliquant "uploading an existing file")
```

Option B (ligne de commande) :
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE-USER/VOTRE-REPO.git
git push -u origin main
```

### Étape 3 — Activer GitHub Pages

1. Dans votre repo → **Settings** → **Pages** (menu de gauche)
2. Source : **Deploy from a branch**
3. Branch : **main** / **/ (root)**
4. Cliquez **Save**

→ Votre site sera disponible sur `https://VOTRE-USER.github.io/VOTRE-REPO/`

### Étape 4 — Configurer le nom de domaine personnalisé

1. Dans **Settings → Pages**, entrez votre domaine dans "Custom domain" :
   `meilleur-climatiseur-ventilateur.com`
2. Cochez "Enforce HTTPS"

**Chez votre registrar (OVH, Namecheap, Gandi…), ajoutez ces DNS :**

```
Type A :
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

Type CNAME :
www → VOTRE-USER.github.io
```

La propagation DNS prend 5 à 48h.

---

## Personnaliser les templates

### Ajouter un nouvel article

1. Dupliquez `article.html`
2. Renommez-le (ex: `ventilateur-dyson-test.html`)
3. Modifiez le contenu entre les balises `<article>`
4. Mettez à jour les balises `<title>`, `<meta name="description">` et le Schema.org
5. Ajoutez une carte dans `blog.html`

### Modifier le Top 3

Dans `top3.html`, chaque produit est dans un bloc `.product-card` avec les classes :
- `.rank-1` pour le N°1 (bordure dorée)
- `.rank-2` pour le N°2 (bordure argent)
- `.rank-3` pour le N°3 (bordure bronze)

Modifiez les textes, notes et liens d'affiliation directement dans le HTML.

### Liens d'affiliation

Tous les boutons "Voir le meilleur prix →" ont l'attribut `rel="nofollow sponsored"`.
Remplacez simplement `href="#"` par votre lien Amazon/Darty/Cdiscount affilié.

---

## SEO — Ce qui est déjà intégré

- ✅ Balises `<title>` et `<meta description>` optimisées sur chaque page
- ✅ Schema.org (WebSite, ItemList, Article, BreadcrumbList) en JSON-LD
- ✅ Breadcrumb HTML sur la page article
- ✅ `rel="canonical"` sur chaque page
- ✅ Open Graph (partage réseaux sociaux)
- ✅ Balises `<h1>` uniques par page
- ✅ Structure H1 > H2 > H3 logique
- ✅ `rel="nofollow sponsored"` sur les liens affiliés
- ✅ `.nojekyll` pour le déploiement GitHub Pages
