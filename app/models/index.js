const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("./task.model.js")(sequelize, Sequelize);
db.personnels = require("./personnel.model.js")(sequelize, Sequelize);

// Relations entre les modèles
// Un personnel peut avoir plusieurs tâches (relation one-to-many)
db.personnels.hasMany(db.tasks, {
    as: 'taches',
    onDelete: 'CASCADE',  // Supprime les tâches quand un personnel est supprimé
    onUpdate: 'CASCADE'   // Met à jour les références quand un personnel est mis à jour
});

// Une tâche appartient à un seul personnel
db.tasks.belongsTo(db.personnels, {
    foreignKey: {
        name: 'personnelId',
        allowNull: false  
    },
    as: 'personnel'
})

module.exports = db;