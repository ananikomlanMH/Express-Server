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
      // Tâches pour le développeur (Ibrahim Abdou)
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
      
      // Tâches pour le designer (Aïcha Issoufou)
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
      
      // Tâches pour le chef de projet (Ousmane Mahamadou)
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
      
      // Tâches pour l'analyste (Fatima Moussa)
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
      
      // Tâches pour le testeur (Mariama Amadou)
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
      
      // Tâches pour l'administrateur système (Hadiza Boubacar)
      else if (personnel.poste === "Administrateur système") {
        tasksData.push(
          {
            titre: "Configurer le serveur de production",
            description: "Installer et configurer le serveur pour le déploiement de l'application",
            dateEcheance: new Date(2025, 5, 20), // 20 juin 2025
            priorite: "haute",
            statut: "en cours",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Mettre à jour les systèmes de sécurité",
            description: "Appliquer les derniers correctifs de sécurité sur tous les serveurs",
            dateEcheance: new Date(2025, 5, 25), // 25 juin 2025
            priorite: "haute",
            statut: "à faire",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Sauvegarder les bases de données",
            description: "Effectuer une sauvegarde complète de toutes les bases de données",
            dateEcheance: new Date(2025, 5, 10), // 10 juin 2025
            priorite: "moyenne",
            statut: "terminée",
            realisee: true,
            personnelId: personnel.id
          }
        );
      }
      
      // Tâches pour le responsable marketing (Fati Souleymane)
      else if (personnel.poste === "Responsable marketing") {
        tasksData.push(
          {
            titre: "Lancer la campagne sur les réseaux sociaux",
            description: "Coordonner le lancement de la campagne marketing sur toutes les plateformes",
            dateEcheance: new Date(2025, 5, 30), // 30 juin 2025
            priorite: "haute",
            statut: "en cours",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Analyser les résultats de la dernière campagne",
            description: "Compiler et analyser les données de performance de la campagne précédente",
            dateEcheance: new Date(2025, 6, 5), // 5 juillet 2025
            priorite: "moyenne",
            statut: "à faire",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Préparer le matériel promotionnel",
            description: "Finaliser les brochures et affiches pour le prochain événement",
            dateEcheance: new Date(2025, 5, 15), // 15 juin 2025
            priorite: "basse",
            statut: "terminée",
            realisee: true,
            personnelId: personnel.id
          }
        );
      }
      
      // Tâches pour le comptable (Amina Yacouba)
      else if (personnel.poste === "Comptable") {
        tasksData.push(
          {
            titre: "Préparer les états financiers mensuels",
            description: "Compiler et analyser les données financières du mois",
            dateEcheance: new Date(2025, 6, 5), // 5 juillet 2025
            priorite: "haute",
            statut: "à faire",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Traiter les factures des fournisseurs",
            description: "Vérifier et payer les factures des fournisseurs",
            dateEcheance: new Date(2025, 5, 20), // 20 juin 2025
            priorite: "moyenne",
            statut: "en cours",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Finaliser la déclaration fiscale",
            description: "Préparer et soumettre la déclaration fiscale trimestrielle",
            dateEcheance: new Date(2025, 5, 10), // 10 juin 2025
            priorite: "haute",
            statut: "terminée",
            realisee: true,
            personnelId: personnel.id
          }
        );
      }
      
      // Tâches pour les ressources humaines (Ramatou Issa)
      else if (personnel.poste === "Ressources humaines") {
        tasksData.push(
          {
            titre: "Organiser les entretiens d'embauche",
            description: "Planifier et coordonner les entretiens pour les nouveaux postes",
            dateEcheance: new Date(2025, 5, 25), // 25 juin 2025
            priorite: "haute",
            statut: "en cours",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Mettre à jour le manuel des employés",
            description: "Réviser et mettre à jour les politiques de l'entreprise",
            dateEcheance: new Date(2025, 6, 10), // 10 juillet 2025
            priorite: "moyenne",
            statut: "à faire",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Traiter les demandes de congés",
            description: "Examiner et approuver les demandes de congés des employés",
            dateEcheance: new Date(2025, 5, 15), // 15 juin 2025
            priorite: "basse",
            statut: "terminée",
            realisee: true,
            personnelId: personnel.id
          }
        );
      }
      
      // Tâches pour le développeur mobile (Zeinabou Mamane)
      else if (personnel.poste === "Développeur mobile") {
        tasksData.push(
          {
            titre: "Développer l'application mobile Android",
            description: "Implémenter les fonctionnalités principales de l'application Android",
            dateEcheance: new Date(2025, 6, 15), // 15 juillet 2025
            priorite: "haute",
            statut: "en cours",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Corriger les bugs de l'application iOS",
            description: "Résoudre les problèmes signalés par les utilisateurs iOS",
            dateEcheance: new Date(2025, 5, 25), // 25 juin 2025
            priorite: "haute",
            statut: "à faire",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Tester la compatibilité des appareils",
            description: "Vérifier que l'application fonctionne sur différents modèles de smartphones",
            dateEcheance: new Date(2025, 5, 10), // 10 juin 2025
            priorite: "moyenne",
            statut: "terminée",
            realisee: true,
            personnelId: personnel.id
          }
        );
      }
      
      // Tâches pour l'analyste de données (Salamatou Adamou)
      else if (personnel.poste === "Analyste de données") {
        tasksData.push(
          {
            titre: "Analyser les données d'utilisation",
            description: "Examiner les modèles d'utilisation de l'application et générer des rapports",
            dateEcheance: new Date(2025, 5, 28), // 28 juin 2025
            priorite: "haute",
            statut: "en cours",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Créer des tableaux de bord de visualisation",
            description: "Développer des tableaux de bord interactifs pour l'équipe de direction",
            dateEcheance: new Date(2025, 6, 10), // 10 juillet 2025
            priorite: "moyenne",
            statut: "à faire",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Optimiser les requêtes d'analyse",
            description: "Améliorer les performances des requêtes d'analyse de données",
            dateEcheance: new Date(2025, 5, 12), // 12 juin 2025
            priorite: "basse",
            statut: "terminée",
            realisee: true,
            personnelId: personnel.id
          }
        );
      }
      
      // Tâches pour le chef de produit (Balkissa Sani)
      else if (personnel.poste === "Chef de produit") {
        tasksData.push(
          {
            titre: "Définir la feuille de route du produit",
            description: "Planifier les fonctionnalités et améliorations pour les six prochains mois",
            dateEcheance: new Date(2025, 6, 5), // 5 juillet 2025
            priorite: "haute",
            statut: "en cours",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Analyser la concurrence",
            description: "Effectuer une analyse détaillée des produits concurrents",
            dateEcheance: new Date(2025, 5, 30), // 30 juin 2025
            priorite: "moyenne",
            statut: "à faire",
            realisee: false,
            personnelId: personnel.id
          },
          {
            titre: "Préparer la présentation du nouveau produit",
            description: "Créer une présentation pour le lancement du nouveau produit",
            dateEcheance: new Date(2025, 5, 15), // 15 juin 2025
            priorite: "haute",
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
