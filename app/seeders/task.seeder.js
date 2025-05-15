const db = require("../models");
const Task = db.tasks;
const Personnel = db.personnels;

// Fonction pour créer des données de test pour les tâches
const seedTasks = async () => {
  try {
    // Vérifier si des données existent déjà
    const count = await Task.count();
    if (count > 0) {
      console.log("La table Task contient déjà des données.");
      return;
    }

    // Récupérer tous les personnels pour leur attribuer des tâches
    const personnels = await Personnel.findAll();
    
    if (personnels.length === 0) {
      console.log("Aucun personnel trouvé. Veuillez d'abord exécuter le seeder de personnel.");
      return;
    }

    // Créer un tableau pour stocker toutes les tâches
    const tasksData = [];

    // Pour chaque personnel, créer quelques tâches
    for (const personnel of personnels) {
      // Tâches pour le développeur (Jean Dupont)
      if (personnel.poste === "Développeur") {
        tasksData.push(
          {
            titre: "Développer la fonctionnalité de connexion",
            description: "Implémenter l'authentification des utilisateurs avec JWT",
            dateEcheance: new Date(2025, 5, 20), // 20 juin 2025
            priorite: "haute",
            statut: "en cours",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Corriger les bugs de l'interface utilisateur",
            description: "Résoudre les problèmes d'affichage sur mobile",
            dateEcheance: new Date(2025, 5, 15), // 15 juin 2025
            priorite: "moyenne",
            statut: "à faire",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Optimiser les requêtes SQL",
            description: "Améliorer les performances de la base de données",
            dateEcheance: new Date(2025, 5, 10), // 10 juin 2025
            priorite: "basse",
            statut: "terminée",
            realisee: true,
            personnelId: personnel.id
          }
        );
      }
      
      // Tâches pour le designer (Sophie Martin)
      else if (personnel.poste === "Designer") {
        tasksData.push(
          {
            titre: "Créer les maquettes de l'application mobile",
            description: "Concevoir l'interface utilisateur pour l'application mobile",
            dateEcheance: new Date(2025, 5, 25), // 25 juin 2025
            priorite: "haute",
            statut: "en cours",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Refonte du logo de l'entreprise",
            description: "Moderniser le logo pour la nouvelle campagne marketing",
            dateEcheance: new Date(2025, 6, 5), // 5 juillet 2025
            priorite: "moyenne",
            statut: "à faire",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Design de la page d'accueil",
            description: "Finaliser le design de la page d'accueil du site web",
            dateEcheance: new Date(2025, 5, 5), // 5 juin 2025
            priorite: "moyenne",
            statut: "terminée",
            realisee: true,
            personnelId: personnel.id
          }
        );
      }
      
      // Tâches pour le chef de projet (Pierre Dubois)
      else if (personnel.poste === "Chef de projet") {
        tasksData.push(
          {
            titre: "Planifier la réunion hebdomadaire",
            description: "Organiser l'ordre du jour et inviter les participants",
            dateEcheance: new Date(2025, 5, 12), // 12 juin 2025
            priorite: "moyenne",
            statut: "terminée",
            realisee: true,
            personnelId: personnel.id
          },
          {
            titre: "Rédiger le rapport mensuel",
            description: "Compiler les statistiques et préparer le rapport pour la direction",
            dateEcheance: new Date(2025, 5, 30), // 30 juin 2025
            priorite: "haute",
            statut: "à faire",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Suivre l'avancement du projet",
            description: "Mettre à jour le tableau de bord et suivre les indicateurs de performance",
            dateEcheance: new Date(2025, 5, 18), // 18 juin 2025
            priorite: "haute",
            statut: "en cours",
            realisee: false,
            personnelId: personnel.id
          }
        );
      }
      
      // Tâches pour l'analyste (Marie Leroy)
      else if (personnel.poste === "Analyste") {
        tasksData.push(
          {
            titre: "Analyser les besoins des utilisateurs",
            description: "Réaliser des entretiens avec les utilisateurs finaux",
            dateEcheance: new Date(2025, 5, 22), // 22 juin 2025
            priorite: "haute",
            statut: "en cours",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Rédiger les spécifications fonctionnelles",
            description: "Documenter les fonctionnalités requises pour le prochain sprint",
            dateEcheance: new Date(2025, 6, 2), // 2 juillet 2025
            priorite: "moyenne",
            statut: "à faire",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Évaluer les solutions concurrentes",
            description: "Analyser les forces et faiblesses des produits concurrents",
            dateEcheance: new Date(2025, 5, 8), // 8 juin 2025
            priorite: "basse",
            statut: "terminée",
            realisee: true,
            personnelId: personnel.id
          }
        );
      }
      
      // Tâches pour le testeur (Thomas Moreau)
      else if (personnel.poste === "Testeur") {
        tasksData.push(
          {
            titre: "Tester la nouvelle fonctionnalité de recherche",
            description: "Vérifier que la recherche fonctionne correctement avec différents critères",
            dateEcheance: new Date(2025, 5, 14), // 14 juin 2025
            priorite: "haute",
            statut: "en cours",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Rédiger des scénarios de test",
            description: "Préparer des cas de test pour la prochaine version",
            dateEcheance: new Date(2025, 5, 28), // 28 juin 2025
            priorite: "moyenne",
            statut: "à faire",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Tester la compatibilité mobile",
            description: "Vérifier que l'application fonctionne sur différents appareils mobiles",
            dateEcheance: new Date(2025, 5, 7), // 7 juin 2025
            priorite: "moyenne",
            statut: "terminée",
            realisee: true,
            personnelId: personnel.id
          }
        );
      }
      
      // Pour tout autre personnel, ajouter des tâches génériques
      else {
        tasksData.push(
          {
            titre: "Tâche 1 pour " + personnel.prenom,
            description: "Description de la tâche 1",
            dateEcheance: new Date(2025, 5, 15), // 15 juin 2025
            priorite: "moyenne",
            statut: "à faire",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Tâche 2 pour " + personnel.prenom,
            description: "Description de la tâche 2",
            dateEcheance: new Date(2025, 5, 20), // 20 juin 2025
            priorite: "haute",
            statut: "en cours",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Tâche 3 pour " + personnel.prenom,
            description: "Description de la tâche 3",
            dateEcheance: new Date(2025, 5, 5), // 5 juin 2025
            priorite: "basse",
            statut: "terminée",
            realisee: true,
            personnelId: personnel.id
          }
        );
      }
    }

    // Insérer les données dans la base de données
    await Task.bulkCreate(tasksData);
    console.log("Données de tâches insérées avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'insertion des données de tâches:", error);
  }
};

module.exports = seedTasks;
