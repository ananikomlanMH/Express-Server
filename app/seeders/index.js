const seedPersonnels = require('./personnel.seeder');
const seedTasks = require('./task.seeder');

// Fonction pour exécuter tous les seeders
const runSeeders = async () => {
  try {
    console.log('Démarrage des seeders...');
    
    // Exécuter les seeders dans l'ordre (d'abord le personnel, puis les tâches)
    await seedPersonnels();
    await seedTasks();
    
    console.log('Tous les seeders ont été exécutés avec succès !');
  } catch (error) {
    console.error('Erreur lors de l\'exécution des seeders:', error);
  }
};

module.exports = runSeeders;
