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

    // Données de test pour le personnel nigérien
    const personnelData = [
      {
        nom: "Abdou",
        prenom: "Ibrahim",
        email: "ibrahim.abdou@example.com",
        telephone: "+22790123456",
        poste: "Développeur",
        departement: "Informatique"
      },
      {
        nom: "Issoufou",
        prenom: "Aïcha",
        email: "aicha.issoufou@example.com",
        telephone: "+22791234567",
        poste: "Designer",
        departement: "Marketing"
      },
      {
        nom: "Mahamadou",
        prenom: "Ousmane",
        email: "ousmane.mahamadou@example.com",
        telephone: "+22792345678",
        poste: "Chef de projet",
        departement: "Gestion de projet"
      },
      {
        nom: "Moussa",
        prenom: "Fatima",
        email: "fatima.moussa@example.com",
        telephone: "+22793456789",
        poste: "Analyste",
        departement: "Informatique"
      },
      {
        nom: "Amadou",
        prenom: "Mariama",
        email: "mariama.amadou@example.com",
        telephone: "+22794567890",
        poste: "Testeur",
        departement: "Qualité"
      },
      {
        nom: "Boubacar",
        prenom: "Hadiza",
        email: "hadiza.boubacar@example.com",
        telephone: "+22795678901",
        poste: "Administrateur système",
        departement: "Informatique"
      },
      {
        nom: "Souleymane",
        prenom: "Fati",
        email: "fati.souleymane@example.com",
        telephone: "+22796789012",
        poste: "Responsable marketing",
        departement: "Marketing"
      },
      {
        nom: "Yacouba",
        prenom: "Amina",
        email: "amina.yacouba@example.com",
        telephone: "+22797890123",
        poste: "Comptable",
        departement: "Finance"
      },
      {
        nom: "Issa",
        prenom: "Ramatou",
        email: "ramatou.issa@example.com",
        telephone: "+22798901234",
        poste: "Ressources humaines",
        departement: "Administration"
      },
      {
        nom: "Mamane",
        prenom: "Zeinabou",
        email: "zeinabou.mamane@example.com",
        telephone: "+22799012345",
        poste: "Développeur mobile",
        departement: "Informatique"
      },
      {
        nom: "Adamou",
        prenom: "Salamatou",
        email: "salamatou.adamou@example.com",
        telephone: "+22780123456",
        poste: "Analyste de données",
        departement: "Informatique"
      },
      {
        nom: "Sani",
        prenom: "Balkissa",
        email: "balkissa.sani@example.com",
        telephone: "+22781234567",
        poste: "Chef de produit",
        departement: "Marketing"
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
