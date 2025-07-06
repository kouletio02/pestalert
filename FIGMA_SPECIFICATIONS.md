# 🎨 Figma Specifications - PestAlert WhatsApp Prototype

## 📋 Vue d'ensemble du projet

**Nom du projet :** PestAlert WhatsApp Interface  
**Type :** Application mobile chatbot  
**Style :** WhatsApp-like avec design moderne  
**Couleurs principales :** Vert WhatsApp (#25d366, #128c7e, #075e54)  
**Police :** Inter (400, 500, 600, 700)

---

## 🎨 Système de Design

### Couleurs
```css
/* Couleurs principales */
--wa-green: #25d366
--wa-dark-green: #128c7e
--wa-header: #075e54
--wa-bg: #ece5dd
--wa-bubble-user: #dcf8c6
--wa-bubble-bot: #ffffff

/* Couleurs secondaires */
--success: #e8f5e8
--warning: #fff3cd
--error: #f8d7da
--info: #d1ecf1
--text-primary: #222222
--text-secondary: #6b7280
```

### Typographie
- **Famille :** Inter
- **Tailles :** 0.75rem, 0.875rem, 1rem, 1.1rem, 1.25rem, 1.5rem
- **Poids :** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Espacement
- **Base :** 0.25rem (4px)
- **Petit :** 0.5rem (8px)
- **Moyen :** 1rem (16px)
- **Grand :** 1.5rem (24px)

---

## 📱 Structure des Frames

### Frame Principal : Mobile (430x932px)
- **Nom :** "PestAlert - Mobile"
- **Background :** #ece5dd
- **Contraintes :** Responsive

### Composants principaux
1. **Header** (430x72px)
2. **Chat Area** (430x788px)
3. **Quick Replies** (430x72px)

---

## 🧩 Composants réutilisables

### 1. Header Component
```
Nom: "Header"
Taille: 430x72px
Background: #075e54
Contenu:
- Avatar (40x40px, #25d366, icône leaf)
- Titre "PestAlert Bot" (Inter, 1.1rem, 600, blanc)
- Bouton Admin (128c7e, 8px radius)
```

### 2. Bubble Component
```
Nom: "Chat Bubble"
Variantes:
- Bot Bubble (gauche, blanc, radius 18px 18px 18px 6px)
- User Bubble (droite, #dcf8c6, radius 18px 18px 6px 18px)
- Max-width: 80%
- Padding: 0.7rem 1rem
- Shadow: 0 2px 8px rgba(0,0,0,0.04)
```

### 3. Quick Reply Component
```
Nom: "Quick Reply Button"
Taille: Auto x 40px
Background: #25d366
Radius: 20px
Padding: 0.5rem 1.2rem
Variantes:
- Primary: #25d366
- Secondary: #128c7e
- Warning: #fbbf24
```

### 4. Loader Component
```
Nom: "Loading Spinner"
Taille: 1.2em x 1.2em
Animation: spin 1s linear infinite
Border: 3px solid #25d366
Border-top: 3px solid #fff
```

---

## 📄 Écrans à créer

### 1. Écran d'accueil
**Nom :** "01 - Accueil"
**Contenu :**
- Header
- Bulle bot : "👋 Bonjour ! Je suis votre assistant agricole PestAlert..."
- Quick replies : 📸 Photo, 💊 Traitement, 🚨 Signalement, 📊 Dashboard, ⚙️ Paramètres

### 2. Diagnostic Photo
**Nom :** "02 - Diagnostic Photo"
**Contenu :**
- Bulle user : "📸 Photo"
- Bulle bot : "Veuillez prendre une photo nette..."
- Quick replies : "Reprendre 📷", "Envoyer ✅"

### 3. Analyse en cours
**Nom :** "03 - Analyse"
**Contenu :**
- Bulle user : "Envoyer ✅"
- Bulle bot avec loader : "Analyse en cours..."

### 4. Résultat d'analyse
**Nom :** "04 - Résultat"
**Contenu :**
- Bulle bot : "Ravageur détecté : Chenille légionnaire..."
- Quick replies : "💊 Oui, traitement", "Retour menu"

### 5. Guide de traitement
**Nom :** "05 - Traitement"
**Contenu :**
- Bulle user : "💊 Traitement"
- Bulle bot avec liste détaillée
- Quick replies : "Télécharger PDF", "Retour menu"

### 6. Signalement
**Nom :** "06 - Signalement"
**Contenu :**
- Bulle user : "🚨 Signalement"
- Bulles bot avec formulaire (select, input, textarea)
- Quick replies : "Envoyer 🚀", "Retour menu"

### 7. Confirmation signalement
**Nom :** "07 - Confirmation Signalement"
**Contenu :**
- Bulle user : "Envoyer 🚀"
- Bulle bot : "✅ Signalement ajouté avec succès !"
- Quick reply : "Retour menu"

### 8. Historique
**Nom :** "08 - Historique"
**Contenu :**
- Bulle user : "📋 Historique"
- Bulle bot avec liste d'analyses
- Quick replies : "Exporter PDF", "Retour menu"

### 9. Dashboard utilisateur
**Nom :** "09 - Dashboard"
**Contenu :**
- Bulle user : "📊 Dashboard"
- Bulles bot avec KPIs et graphiques
- Quick replies : "Voir plus 📉", "Retour menu"

### 10. Détail Dashboard
**Nom :** "10 - Dashboard Détail"
**Contenu :**
- Bulle user : "Voir plus 📉"
- Bulles bot avec carte thermique et stats détaillées
- Quick replies : "Retour dashboard", "Retour menu"

### 11. Paramètres
**Nom :** "11 - Paramètres"
**Contenu :**
- Bulle user : "⚙️ Paramètres"
- Bulles bot avec formulaire complet
- Quick replies : "💾 Sauvegarder", "Retour menu"

### 12. Confirmation paramètres
**Nom :** "12 - Confirmation Paramètres"
**Contenu :**
- Bulle user : "💾 Sauvegarder"
- Bulle bot : "✅ Paramètres sauvegardés !"
- Quick reply : "Retour menu"

---

## 🛠️ Interface Admin

### 13. Header Admin
**Nom :** "13 - Header Admin"
**Contenu :**
- Titre : "PestAlert Admin"
- Bouton : "Utilisateur"

### 14. Vue d'ensemble Admin
**Nom :** "14 - Admin Overview"
**Contenu :**
- Message d'accueil admin
- Onglets : Vue d'ensemble, Carte, Utilisateur, Intents, Stats, Système
- Grille de KPIs (2x2)

### 15. Carte Admin
**Nom :** "15 - Admin Map"
**Contenu :**
- Titre : "🗺️ Carte des signalements"
- Zone carte (200px height)
- Filtres

### 16. Utilisateur Admin
**Nom :** "16 - Admin User"
**Contenu :**
- Titre : "📋 Détail utilisateur"
- Fiche agriculteur
- Historique complet

### 17. Intents Admin
**Nom :** "17 - Admin Intents"
**Contenu :**
- Titre : "🤖 Gestion des Intents"
- Zone de modification
- Bouton test

### 18. Stats Admin
**Nom :** "18 - Admin Stats"
**Contenu :**
- Titre : "📈 Statistiques par culture"
- Graphiques
- Courbes de tendance

### 19. Système Admin
**Nom :** "19 - Admin System"
**Contenu :**
- Titre : "⚙️ Paramètres système"
- Clés API
- Coûts
- Rôles

---

## 🔧 Instructions d'importation

### Étape 1 : Créer le projet Figma
1. Ouvrir Figma
2. Créer un nouveau fichier
3. Nommer : "PestAlert WhatsApp Prototype"

### Étape 2 : Configurer le système de design
1. Créer les couleurs dans le système de design
2. Ajouter la police Inter
3. Créer les composants de base (Header, Bubble, Quick Reply, Loader)

### Étape 3 : Créer les frames
1. Créer le frame principal 430x932px
2. Dupliquer pour chaque écran
3. Nommer selon la convention "01 - Accueil", etc.

### Étape 4 : Ajouter le contenu
1. Utiliser les composants créés
2. Ajouter le contenu spécifique à chaque écran
3. Créer les variantes pour les états différents

### Étape 5 : Prototypage
1. Connecter les écrans avec des liens
2. Ajouter les interactions (clicks, hover)
3. Tester le flux utilisateur

---

## 📱 Responsive Design

### Breakpoints
- **Mobile :** 430px (principal)
- **Tablet :** 768px (optionnel)
- **Desktop :** 1024px (optionnel)

### Contraintes
- Header : Sticky top
- Chat : Scroll vertical
- Quick replies : Sticky bottom

---

## 🎯 Interactions à prototyper

### Navigation principale
- Accueil → Photo → Analyse → Résultat → Traitement
- Accueil → Signalement → Confirmation
- Accueil → Dashboard → Détail
- Accueil → Paramètres → Confirmation
- Header Admin → Interface Admin → Onglets

### États interactifs
- Hover sur quick replies
- Loading states
- Form validation
- Switch toggles

---

## 📦 Export et livraison

### Fichiers à exporter
1. **Figma File (.fig)** - Projet complet
2. **PDF Specification** - Ce document
3. **Assets** - Icônes, images, composants

### Liens utiles
- **Fonts :** Google Fonts - Inter
- **Icons :** Font Awesome 6.4.0
- **Colors :** WhatsApp Brand Colors

---

## ✅ Checklist de validation

- [ ] Tous les écrans créés (19 écrans)
- [ ] Composants réutilisables configurés
- [ ] Système de couleurs appliqué
- [ ] Typographie cohérente
- [ ] Interactions prototypées
- [ ] Responsive design testé
- [ ] Export des assets
- [ ] Documentation complète

---

**Prêt pour l'importation dans Figma ! 🚀** 