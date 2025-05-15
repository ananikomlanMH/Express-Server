module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT
    },
    dateEcheance: {
      type: Sequelize.DATE
    },
    priorite: {
      type: Sequelize.ENUM('basse', 'moyenne', 'haute'),
      defaultValue: 'moyenne'
    },
    statut: {
      type: Sequelize.ENUM('à faire', 'en cours', 'terminée'),
      defaultValue: 'à faire'
    },
    realisee: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });

  return Task;
};