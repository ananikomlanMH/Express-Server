const db = require("../models");
const Personnel = db.personnels;

// Fonction pour créer des données de test pour le personnel
const seedPersonnels = async () => {
  try {
    // Vérifier si des données existent déjà
    const count = await Personnel.count();
    if (count > 0) {
      console.log("La table Personnel contient déjà des données.");
      return;
    }

    // Données de test pour le personnel
    const personnelData = [
      {
        nom: "Dupont",
        prenom: "Jean",
        email: "jean.dupont@example.com",
        telephone: "0123456789",
        poste: "Développeur",
        departement: "Informatique"
      },
      {
        nom: "Martin",
        prenom: "Sophie",
        email: "sophie.martin@example.com",
        telephone: "0234567890",
        poste: "Designer",
        departement: "Marketing"
      },
      {
        nom: "Dubois",
        prenom: "Pierre",
        email: "pierre.dubois@example.com",
        telephone: "0345678901",
        poste: "Chef de projet",
        departement: "Gestion de projet"
      },
      {
        nom: "Leroy",
        prenom: "Marie",
        email: "marie.leroy@example.com",
        telephone: "0456789012",
        poste: "Analyste",
        departement: "Informatique"
      },
      {
        nom: "Moreau",
        prenom: "Thomas",
        email: "thomas.moreau@example.com",
        telephone: "0567890123",
        poste: "Testeur",
        departement: "Qualité"
      }
    ];

    // Insérer les données dans la base de données
    await Personnel.bulkCreate(personnelData);
    console.log("Données de personnel insérées avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'insertion des données de personnel:", error);
  }
};

module.exports = seedPersonnels;
