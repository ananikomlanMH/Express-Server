module.exports = app => {
  const personnels = require("../controllers/personnel.controller.js");

  var router = require("express").Router();

  // Créer un nouveau personnel
  router.post("/", personnels.create);

  // Récupérer tous les personnels
  router.get("/", personnels.findAll);

  // Récupérer un personnel par id
  router.get("/:id", personnels.findOne);

  // Récupérer un personnel avec ses tâches
  router.get("/:id/tasks", personnels.findOneWithTasks);

  // Mettre à jour un personnel par id
  router.put("/:id", personnels.update);

  // Supprimer un personnel par id
  router.delete("/:id", personnels.delete);

  // Supprimer tous les personnels
  router.delete("/", personnels.deleteAll);

  app.use('/api/personnels', router);
};
