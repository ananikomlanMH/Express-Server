module.exports = app => {
  const tasks = require("../controllers/task.controller.js");

  var router = require("express").Router();

  // Créer une nouvelle tâche
  router.post("/", tasks.create);

  // Récupérer toutes les tâches
  router.get("/", tasks.findAll);

  // Récupérer une tâche par id
  router.get("/:id", tasks.findOne);

  // Récupérer toutes les tâches d'un personnel
  router.get("/personnel/:personnelId", tasks.findAllByPersonnel);

  // Récupérer toutes les tâches réalisées d'un personnel
  router.get("/personnel/:personnelId/completed", tasks.findAllCompletedByPersonnel);

  // Récupérer toutes les tâches non réalisées d'un personnel
  router.get("/personnel/:personnelId/pending", tasks.findAllPendingByPersonnel);

  // Mettre à jour une tâche par id
  router.put("/:id", tasks.update);

  // Marquer une tâche comme réalisée
  router.put("/:id/complete", tasks.markAsCompleted);

  // Supprimer une tâche par id
  router.delete("/:id", tasks.delete);

  // Supprimer toutes les tâches
  router.delete("/", tasks.deleteAll);

  app.use('/api/tasks', router);
};
