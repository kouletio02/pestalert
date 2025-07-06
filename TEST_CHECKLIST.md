# 🧪 CHECKLIST DE TEST MOBILE - PESTALERT

## 📱 **LIEN DE TEST**
```
http://192.168.137.101:8000
```

**Instructions :**
1. Assure-toi que ton téléphone et ton PC sont sur le même réseau WiFi
2. Ouvre le navigateur de ton téléphone
3. Tape l'adresse ci-dessus
4. PestAlert devrait s'afficher !

---

## ✅ **CHECKLIST DE VALIDATION**

### 🏠 **ÉCRAN 1 : ACCUEIL**
- [ ] **Affichage** : L'écran s'affiche correctement sur mobile
- [ ] **Message de bienvenue** : "Bonjour Marie !" visible
- [ ] **Quick Reply "Diagnostic Photo"** : 
  - [ ] Bouton cliquable
  - [ ] Animation au clic
  - [ ] Navigation vers Écran 2
- [ ] **Quick Reply "Conseils Traitement"** :
  - [ ] Bouton cliquable
  - [ ] Navigation vers Écran 5
- [ ] **Quick Reply "Signaler Foyer"** :
  - [ ] Bouton cliquable
  - [ ] Navigation vers Écran 6
- [ ] **Quick Reply "Mon Dashboard"** :
  - [ ] Bouton cliquable
  - [ ] Navigation vers Écran 9

### 📸 **ÉCRAN 2 : INTERFACE CAMÉRA**
- [ ] **Affichage** : Interface caméra s'affiche
- [ ] **Grille de cadrage** : Grille 3x3 visible
- [ ] **Zone de focus** : Cible centrale visible
- [ ] **Bouton "Reprendre"** : Cliquable
- [ ] **Bouton "Envoyer"** : 
  - [ ] Cliquable
  - [ ] Déclenche l'analyse (Écran 3)

### ⏳ **ÉCRAN 3 : ANALYSE IA**
- [ ] **Affichage** : Écran d'analyse s'affiche
- [ ] **Animation loader** : Cercle qui tourne
- [ ] **Texte "Analyse en cours..."** : Visible
- [ ] **Étapes d'analyse** : 
  - [ ] "Préparation image" ✓
  - [ ] "Détection ravageur" (en cours)
  - [ ] "Évaluation gravité" (en attente)
- [ ] **Transition automatique** : Passe à Écran 4 après 3 secondes

### 🔍 **ÉCRAN 4 : DIAGNOSTIC**
- [ ] **Affichage** : Résultat s'affiche
- [ ] **Nom du ravageur** : "Criquet migrateur" visible
- [ ] **Barre de gravité** : 
  - [ ] Barre visible
  - [ ] Niveau "Modérée" affiché
- [ ] **Bouton "Voir le traitement"** :
  - [ ] Cliquable
  - [ ] Navigation vers Écran 5
- [ ] **Bouton "Retour au menu"** :
  - [ ] Cliquable
  - [ ] Navigation vers Écran 1

### 💊 **ÉCRAN 5 : PLAN DE TRAITEMENT**
- [ ] **Affichage** : Plan s'affiche
- [ ] **Étapes numérotées** :
  - [ ] Étape 1 : "Pulvérisation biologique"
  - [ ] Étape 2 : "Période d'attente"
  - [ ] Étape 3 : "Surveillance"
- [ ] **Informations fournisseurs** : "AgriSupply - 2km" visible
- [ ] **Coût** : "45€/ha" visible
- [ ] **Bouton "Télécharger PDF"** :
  - [ ] Cliquable
  - [ ] Affiche feedback "PDF téléchargé !"
- [ ] **Bouton "Retour"** :
  - [ ] Cliquable
  - [ ] Navigation vers Écran 1

### 🚨 **ÉCRAN 6 : SIGNALEMENT FOYER**
- [ ] **Affichage** : Formulaire s'affiche
- [ ] **Champ "Localisation"** :
  - [ ] Saisie possible
  - [ ] Placeholder visible
- [ ] **Bouton "Position actuelle"** :
  - [ ] Cliquable
  - [ ] Affiche "Localisation..." puis "Position actuelle"
  - [ ] Toast de confirmation apparaît
- [ ] **Sélecteur "Type de culture"** :
  - [ ] Dropdown fonctionnel
  - [ ] Options visibles
- [ ] **Sélecteur "Niveau d'infestation"** :
  - [ ] Boutons cliquables
  - [ ] Sélection "Moyen" par défaut
- [ ] **Champ "Description"** :
  - [ ] Saisie possible
  - [ ] Placeholder visible
- [ ] **Bouton "Envoyer signalement"** :
  - [ ] Cliquable
  - [ ] Affiche message de succès

### 📚 **ÉCRAN 7 : HISTORIQUE**
- [ ] **Affichage** : Historique s'affiche
- [ ] **Filtres** :
  - [ ] Onglets "Tous/Résolus/En cours" cliquables
  - [ ] Sélecteur de date fonctionnel
- [ ] **Liste des diagnostics** :
  - [ ] "Criquet migrateur - 15/03/2024" visible
  - [ ] "Chenille légionnaire - 12/03/2024" visible
  - [ ] "Criquet migrateur - 08/03/2024" visible
- [ ] **Statuts** :
  - [ ] ✓ vert pour les résolus
  - [ ] ⏰ pour en cours
- [ ] **Bouton flottant "Export PDF"** :
  - [ ] Visible en bas à droite
  - [ ] Cliquable
  - [ ] Affiche feedback "Exporté !"

### ⚙️ **ÉCRAN 8 : PARAMÈTRES**
- [ ] **Affichage** : Paramètres s'affichent
- [ ] **Profil** :
  - [ ] Avatar et nom visibles
  - [ ] Bouton "Éditer" cliquable
- [ ] **Section "Profil"** :
  - [ ] Champ "Nom complet" modifiable
  - [ ] Sélecteur "Culture principale" fonctionnel
- [ ] **Section "Préférences"** :
  - [ ] Sélecteur "Langue" fonctionnel
  - [ ] Toggle "Notifications" cliquable
  - [ ] Toggle "Géolocalisation" cliquable
- [ ] **Section "Application"** :
  - [ ] Version "1.2.0" visible
  - [ ] Lien "Aide" cliquable
- [ ] **Bouton "Sauvegarder"** :
  - [ ] Cliquable
  - [ ] Affiche "Sauvegarde..." puis "Sauvegardé !"

### 📊 **ÉCRAN 9 : DASHBOARD**
- [ ] **Affichage** : Dashboard s'affiche
- [ ] **KPI Cards** :
  - [ ] "12 Diagnostics" visible
  - [ ] "3 Alertes actives" visible
  - [ ] "94% Taux de réussite" visible
  - [ ] "156 Agriculteurs actifs" visible
- [ ] **Bouton "Rafraîchir"** :
  - [ ] Cliquable
  - [ ] Affiche "Chargement..." puis "Rafraîchir"
  - [ ] KPI se mettent à jour avec animation
- [ ] **Graphique d'évolution** :
  - [ ] Placeholder visible
  - [ ] Onglets "7j/30j/90j" cliquables
- [ ] **Bouton "Voir détails"** :
  - [ ] Cliquable
  - [ ] Navigation vers Écran 10

### 📈 **ÉCRAN 10 : ANALYTICS**
- [ ] **Affichage** : Analytics s'affichent
- [ ] **Heatmap** :
  - [ ] Grille 3x3 visible
  - [ ] Couleurs différentes (faible/moyen/élevé)
  - [ ] Légende visible
- [ ] **Graphique en barres** :
  - [ ] "Criquet 70%" visible
  - [ ] "Chenille 45%" visible
  - [ ] "Puceron 30%" visible
- [ ] **Graphique linéaire** :
  - [ ] Ligne SVG visible
- [ ] **Statistiques utilisateurs** :
  - [ ] "156 Agriculteurs actifs" visible
  - [ ] "89% Taux d'adoption" visible
  - [ ] "4.2 Note moyenne" visible
- [ ] **Bouton "Retour au menu"** :
  - [ ] Cliquable
  - [ ] Navigation vers Écran 1

---

## 🎯 **NAVIGATION GÉNÉRALE**

### **Navigation par onglets**
- [ ] **Tous les onglets** : Cliquables et changent d'écran
- [ ] **Onglet actif** : Visuellement distingué
- [ ] **Transitions** : Fluides entre les écrans

### **Boutons de retour**
- [ ] **Flèche retour** : Fonctionne sur tous les écrans
- [ ] **Boutons "Retour"** : Ramènent au menu ou écran précédent

### **Responsive**
- [ ] **Taille d'écran** : S'adapte à différentes tailles de téléphone
- [ ] **Boutons tactiles** : Assez grands pour être cliqués facilement
- [ ] **Scroll** : Fluide dans tous les écrans
- [ ] **Texte** : Lisible sur petit écran

---

## 🚨 **PROBLÈMES À SIGNALER**

Si tu rencontres un problème, note-le ici :
- [ ] **Écran** : 
- [ ] **Problème** : 
- [ ] **Comportement attendu** : 
- [ ] **Comportement observé** : 

---

## ✅ **VALIDATION FINALE**

- [ ] **Toutes les fonctionnalités** : Fonctionnent correctement
- [ ] **Navigation** : Fluide et intuitive
- [ ] **Animations** : Fluides et professionnelles
- [ ] **Feedback utilisateur** : Présent partout
- [ ] **Expérience mobile** : Optimale

---

## 🎉 **RÉSULTAT**

**Score de validation :** ___ / ___ fonctionnalités

**Statut :** 
- [ ] ✅ Prêt pour la démo
- [ ] ⚠️ Quelques ajustements nécessaires
- [ ] ❌ Problèmes majeurs à corriger

**Notes :** 