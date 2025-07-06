# 🐛 PestAlert WhatsApp Bot - Maquettes UI/UX

## 📋 Description

Maquettes haute-fidélité pour l'interface **PestAlert WhatsApp Bot** avec **Dashboard intégré**. Cette interface simule l'expérience utilisateur complète d'un bot WhatsApp dédié à la détection et au traitement des ravageurs agricoles.

## 🎯 Fonctionnalités

### 🤖 Bot WhatsApp (Écrans 1-8)
- **Écran 1: Accueil** - Interface de bienvenue avec Quick Replies
- **Écran 2: Prise de photo** - Interface caméra avec grille de cadrage
- **Écran 3: Analyse en cours** - Animation de chargement IA
- **Écran 4: Diagnostic** - Résultat d'identification du ravageur
- **Écran 5: Traitement détaillé** - Guide de traitement étape par étape
- **Écran 6: Signalement foyer** - Formulaire de signalement géolocalisé
- **Écran 7: Historique** - Liste des diagnostics avec filtres
- **Écran 8: Paramètres** - Configuration utilisateur

### 📊 Dashboard Intégré (Écrans 9-10)
- **Écran 9: Dashboard Rapide** - KPI en temps réel (2x2 grid)
- **Écran 10: Détails Analytics** - Graphiques détaillés et métriques

## 🎨 Design System

### Couleurs
```css
--green-primary: #2E7D32    /* Vert principal */
--green-light: #C8E6C9      /* Vert clair */
--gray-bg: #F5F5F5          /* Gris fond */
--gray-text: #424242        /* Gris texte */
--orange-cta: #FFB300       /* Orange CTA */
--blue-analytics: #1E88E5   /* Bleu analytics */
```

### Typographie
- **Police**: Poppins (Google Fonts)
- **Titres**: 20px, Bold
- **Sous-titres**: 16px, SemiBold
- **Texte**: 14px, Regular
- **Légendes**: 12px, Light

### Composants
- **Boutons**: 8px border-radius, ombre légère
- **Bulles chat**: 12px border-radius
- **Cartes**: 6px border-radius, ombre 4px
- **Espacements**: 16px marges, 12px padding, 24px gutter

## 🚀 Installation et Utilisation

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Connexion internet (pour Google Fonts)

### Installation
1. Clonez ou téléchargez le projet
2. Ouvrez `index.html` dans votre navigateur
3. Utilisez les boutons de navigation pour explorer les écrans

### Navigation
- **Boutons de navigation** : Changement direct entre écrans
- **Quick Replies** : Simulation d'interaction utilisateur
- **Boutons d'action** : Déclenchement d'animations et transitions

## 📱 Écrans Détaillés

### Écran 1: Accueil
- Message de bienvenue personnalisé
- 4 Quick Replies principaux
- Interface chat WhatsApp authentique

### Écran 2: Prise de photo
- Grille de cadrage 3x3
- Boutons "Reprendre" et "Envoyer"
- Légende d'aide utilisateur

### Écran 3: Analyse en cours
- Animation loader circulaire
- Texte d'état dynamique
- Simulation traitement IA

### Écran 4: Diagnostic
- Nom du ravageur identifié
- Barre de gravité visuelle
- Options de traitement

### Écran 5: Traitement détaillé
- Étapes numérotées avec icônes
- Informations coût et fournisseur
- Actions PDF et retour

### Écran 6: Signalement foyer
- Champ texte pour localisation
- Bouton géolocalisation
- Toast de confirmation

### Écran 7: Historique
- Liste chronologique des diagnostics
- Filtre par date
- Bouton export flottant

### Écran 8: Paramètres
- Sections profil, langues, notifications
- Toggle switches interactifs
- Bouton sauvegarde

### Écran 9: Dashboard Rapide
- 4 KPI cards (2x2 grid)
- Bouton rafraîchissement
- Lien vers détails

### Écran 10: Détails Analytics
- Heatmap des signalements
- Graphique en barres
- Graphique linéaire
- Statistiques utilisateurs

## ⚡ Interactions et Animations

### Animations Automatiques
- **Transitions d'écrans** : Fade-in avec translation
- **Loader** : Rotation continue
- **Graphiques** : Animation progressive des barres et lignes

### Interactions Utilisateur
- **Quick Replies** : Simulation de messages utilisateur
- **Boutons** : Effets hover et click
- **KPI** : Mise à jour avec animations
- **Toast** : Apparition/disparition automatique

### Effets Visuels
- **Hover effects** : Scale et shadow sur les cartes
- **Loading states** : Changement de texte et désactivation
- **Success feedback** : Confirmation visuelle des actions

## 🛠️ Structure Technique

### Fichiers
```
PestAlert/
├── index.html          # Structure HTML principale
├── styles.css          # Styles CSS complets
├── script.js           # Interactions JavaScript
└── README.md           # Documentation
```

### Technologies
- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec variables CSS
- **JavaScript ES6+** : Interactions et animations
- **Google Fonts** : Typographie Poppins

### Responsive Design
- **Mobile-first** : Optimisé pour 360x640px
- **Breakpoints** : Adaptation tablette/desktop
- **Flexbox/Grid** : Layouts modernes

## 🎯 Cas d'Usage

### Pour les Agriculteurs
1. **Détection rapide** : Photo → Diagnostic en 3 secondes
2. **Traitement guidé** : Étapes détaillées avec coûts
3. **Suivi historique** : Traçabilité des interventions
4. **Alertes géolocalisées** : Signalement de foyers

### Pour les Administrateurs
1. **Dashboard temps réel** : KPI et métriques
2. **Analytics détaillés** : Graphiques et tendances
3. **Gestion utilisateurs** : Statistiques d'adoption
4. **Monitoring IA** : Taux de réussite des diagnostics

## 🔧 Personnalisation

### Modifier les Couleurs
Éditez les variables CSS dans `styles.css` :
```css
:root {
    --green-primary: #2E7D32;
    --green-light: #C8E6C9;
    /* ... autres couleurs */
}
```

### Ajouter de Nouveaux Écrans
1. Créez la structure HTML dans `index.html`
2. Ajoutez les styles correspondants dans `styles.css`
3. Implémentez les interactions dans `script.js`

### Modifier les Animations
Les animations sont définies dans `script.js` avec des délais configurables :
```javascript
setTimeout(() => {
    changeScreen(targetScreen);
}, 800); // Délai en millisecondes
```

## 📊 Métriques et KPI

### KPI Principaux
- **Diagnostics/jour** : Volume d'analyses
- **Alertes actives** : Foyers en cours
- **Taux réussite IA** : Précision des diagnostics
- **Utilisateurs actifs** : Adoption de la plateforme

### Graphiques
- **Heatmap** : Densité des signalements
- **Bar Chart** : Répartition par ravageur
- **Line Chart** : Évolution temporelle

## 🚀 Déploiement

### Serveur Local
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### Production
- Hébergez les fichiers sur un serveur web
- Optimisez les images et ressources
- Activez la compression gzip
- Configurez HTTPS

## 🤝 Contribution

### Améliorations Suggérées
- [ ] Ajout d'écrans de configuration avancée
- [ ] Intégration de cartes interactives
- [ ] Support multilingue complet
- [ ] Mode sombre/clair
- [ ] Animations plus sophistiquées

### Standards de Code
- **HTML** : Sémantique et accessible
- **CSS** : Variables CSS et BEM
- **JavaScript** : ES6+ et commentaires

## 📄 Licence

Ce projet est créé pour démontrer les capacités UI/UX de PestAlert WhatsApp Bot. Libre d'utilisation pour des fins éducatives et de démonstration.

## 📞 Support

Pour toute question ou suggestion d'amélioration, n'hésitez pas à ouvrir une issue ou à contacter l'équipe de développement.

---

**🐛 PestAlert** - Protéger l'agriculture, un diagnostic à la fois.
