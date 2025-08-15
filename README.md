# 🎬 MovieScope

MovieScope est une plateforme fictive de critique et de recommandation de films, offrant aux utilisateurs une expérience fluide et interactive pour découvrir de nouveaux films et consulter leurs détails.  
L'application est développée avec **React** et utilise **React Router** pour une navigation rapide et sans rechargement de page.

---

## 📌 Contexte du projet
L’objectif est de créer une application web qui :
- Affiche une liste de films avec leurs **titres**, **affiches** et **notes**.
- Permet de **filtrer** et **consulter les détails** d’un film.
- Offre une **navigation intuitive** entre les pages grâce à **React Router**.
- S’adapte à tous les écrans (mobile, tablette, desktop).
- Utilise différentes méthodes de styling pour une mise en page moderne.

---

## 🚀 Fonctionnalités

- **Affichage dynamique** des films à partir d’un tableau de données (pas d’API externe).
- **Filtrage** avec affichage conditionnel si aucun film ne correspond.
- **Pages** :
  - `/` → Page d’accueil avec liste des films.
  - `/movie/:id` → Page détails d’un film.
  - `/about` → Page statique “À propos”.
- **Mise en forme** avec :
  - CSS classique (`.css`).
  - **CSS Modules**.
  - **CSS-in-JS** (`styled-components` ou `emotion`).
- **Responsive design** pour mobile, tablette et ordinateur.

---

## 📜 User Stories

- En tant qu’utilisateur, je veux voir une **liste de films** avec leurs titres, affiches et notes.
- En tant qu’utilisateur, je veux cliquer sur un film pour accéder à sa **page de détails**.
- En tant qu’utilisateur, je veux voir un **message spécial** si aucun film ne correspond à ma recherche.
- En tant qu’utilisateur, je veux que la mise en page s’adapte à **mon écran**.
- En tant qu’utilisateur, je veux naviguer entre les pages **sans rechargement** du site.

---

## 🎨 Design

- Interface **claire et responsive**.
- Thème visuel **moderne et cohérent** (couleurs et polices harmonieuses).
- **Trois approches de styling** :
  1. CSS classique pour certaines sections.
  2. CSS Modules pour des composants isolés.

---

## 🏗 Structure du projet

- **Page d’accueil** : liste des films avec `map()` et `keys` uniques.
- **Page de détails** : informations détaillées d’un film récupérées via `React Router params`.
- **Page “À propos”** : simple page statique.
- **Messages conditionnels** avec `if`, opérateur ternaire, ou `&&`.


---

## ⚙️ Installation et démarrage

1. **Cloner le projet**  
   ```bash
   git clone https://github.com/votre-compte/moviescope.git
   cd moviescope
