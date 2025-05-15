<p align="center">
  <img src="public/assets/images/logo.svg" alt="Todo-React Logo" width="200" />
</p>

# Todo-React - Application de Gestion des Tâches

## À propos

Todo-React est une application complète de gestion des tâches développée avec React Native pour le frontend et Express.js pour le backend. Cette application permet aux entreprises de gérer efficacement leur personnel et les tâches associées.

## Fonctionnalités

- **Gestion du Personnel**
  - Création, modification et suppression des profils d'employés
  - Différents postes : Développeur, Designer, Chef de projet, Analyste, Testeur

- **Gestion des Tâches**
  - Création et attribution de tâches au personnel
  - Suivi de l'état des tâches (à faire, en cours, terminée)
  - Filtrage des tâches par statut ou par employé

- **Tableau de Bord**
  - Vue d'ensemble des tâches en cours
  - Statistiques sur la productivité

## Structure du Projet

### Backend (Server)

```
server/
├── app/
│   ├── controllers/    # Contrôleurs pour les opérations CRUD
│   ├── models/         # Modèles de données (Personnel, Task)
│   ├── routes/         # Routes API REST
│   └── seeders/        # Données de test pour le développement
├── public/             # Ressources statiques
│   └── assets/
│       └── images/     # Images et logo
├── index.js            # Point d'entrée de l'application
└── package.json        # Dépendances du projet
```

## Technologies Utilisées

- **Backend**
  - Express.js
  - Sequelize ORM
  - MySQL
  - JWT pour l'authentification

- **Frontend**
  - React Native
  - Redux pour la gestion d'état

## Installation

### Prérequis

- Node.js (v14 ou supérieur)
- MySQL

### Configuration du Backend

1. Cloner le dépôt
   ```bash
   git clone [url-du-repo]
   cd Todo-React/Server
   ```

2. Installer les dépendances
   ```bash
   npm install
   ```

3. Configurer les variables d'environnement
   - Créer un fichier `.env` basé sur `.env.example`
   - Configurer les paramètres de la base de données

4. Démarrer le serveur
   ```bash
   npm run dev
   ```

## Données de Test

L'application inclut des seeders qui génèrent automatiquement des données de test en environnement de développement :

- 5 profils d'employés avec différents postes
- Des tâches spécifiques pour chaque type de personnel
- Différents statuts pour les tâches (à faire, en cours, terminée)

## Auteur

- Anani Komlan Mawulom H

## Licence

Ce projet est sous licence ISC.
