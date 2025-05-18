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
   git clone https://github.com/ananikomlanMH/Express-Server.git
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

## API Endpoints

### Personnel

- `GET /api/personnels` : Liste de tout le personnel
- `GET /api/personnels/:id` : Détails d'un membre du personnel
- `GET /api/personnels/:id/tasks` : Détails d'un membre du personnel avec ses tâches
- `POST /api/personnels` : Créer un nouveau membre du personnel
- `PUT /api/personnels/:id` : Mettre à jour un membre du personnel
- `DELETE /api/personnels/:id` : Supprimer un membre du personnel
- `DELETE /api/personnels` : Supprimer tout le personnel

### Tâches

- `GET /api/tasks` : Liste de toutes les tâches
- `GET /api/tasks/:id` : Détails d'une tâche
- `GET /api/tasks/personnel/:personnelId` : Tâches d'un membre du personnel
- `GET /api/tasks/personnel/:personnelId/completed` : Tâches complétées d'un membre du personnel
- `GET /api/tasks/personnel/:personnelId/pending` : Tâches en attente d'un membre du personnel
- `POST /api/tasks` : Créer une nouvelle tâche
- `PUT /api/tasks/:id` : Mettre à jour une tâche
- `PUT /api/tasks/:id/complete` : Marquer une tâche comme réalisée
- `DELETE /api/tasks/:id` : Supprimer une tâche
- `DELETE /api/tasks` : Supprimer toutes les tâches

## Données de Test

L'application inclut des seeders qui génèrent automatiquement des données de test en environnement de développement :

- 5 profils d'employés avec différents postes
- Des tâches spécifiques pour chaque type de personnel
- Différents statuts pour les tâches (à faire, en cours, terminée)

## Auteur

- Anani Komlan Mawulom H

## Licence

Ce projet est sous licence ISC.
