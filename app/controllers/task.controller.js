const db = require("../models");
const Task = db.tasks;
const Personnel = db.personnels;
const Op = db.Sequelize.Op;

// Créer et sauvegarder une nouvelle tâche
exports.create = (req, res) => {
  // Valider la requête
  if (!req.body.titre) {
    res.status(400).send({
      message: "Le titre est obligatoire!"
    });
    return;
  }

  // Créer une tâche
  const task = {
    titre: req.body.titre,
    description: req.body.description,
    dateEcheance: req.body.dateEcheance,
    priorite: req.body.priorite,
    statut: req.body.statut,
    realisee: req.body.realisee || false,
    personnelId: req.body.personnelId
  };

  // Sauvegarder la tâche dans la base de données
  Task.create(task)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la création de la tâche."
      });
    });
};

// Récupérer toutes les tâches de la base de données
exports.findAll = (req, res) => {
  const titre = req.query.titre;
  var condition = titre ? { titre: { [Op.like]: `%${titre}%` } } : null;

  Task.findAll({ 
    where: condition,
    include: [{
      model: Personnel,
      as: 'personnel'
    }],
   order:[
     ['dateEcheance', 'DESC'],
   ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la récupération des tâches."
      });
    });
};

// Trouver une tâche avec un id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Task.findByPk(id, {
    include: [{
      model: Personnel,
      as: 'personnel'
    }]
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Tâche avec id=${id} non trouvée.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la récupération de la tâche avec id=" + id
      });
    });
};

// Trouver toutes les tâches d'un personnel
exports.findAllByPersonnel = (req, res) => {
  const personnelId = req.params.personnelId;

  Task.findAll({
    where: { personnelId: personnelId },
    include: [{
      model: Personnel,
      as: 'personnel'
    }]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Une erreur est survenue lors de la récupération des tâches pour le personnel id=${personnelId}.`
      });
    });
};

// Trouver toutes les tâches réalisées d'un personnel
exports.findAllCompletedByPersonnel = (req, res) => {
  const personnelId = req.params.personnelId;

  Task.findAll({
    where: { 
      personnelId: personnelId,
      realisee: true
    },
    include: [{
      model: Personnel,
      as: 'personnel'
    }]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Une erreur est survenue lors de la récupération des tâches réalisées pour le personnel id=${personnelId}.`
      });
    });
};

// Trouver toutes les tâches non réalisées d'un personnel
exports.findAllPendingByPersonnel = (req, res) => {
  const personnelId = req.params.personnelId;

  Task.findAll({
    where: { 
      personnelId: personnelId,
      realisee: false
    },
    include: [{
      model: Personnel,
      as: 'personnel'
    }]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || `Une erreur est survenue lors de la récupération des tâches non réalisées pour le personnel id=${personnelId}.`
      });
    });
};

// Mettre à jour une tâche identifiée par l'id dans la requête
exports.update = (req, res) => {
  const id = req.params.id;

  Task.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "La tâche a été mise à jour avec succès."
        });
      } else {
        res.send({
          message: `Impossible de mettre à jour la tâche avec id=${id}. La tâche n'a pas été trouvée ou req.body est vide!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la mise à jour de la tâche avec id=" + id
      });
    });
};

// Marquer une tâche comme réalisée
exports.markAsCompleted = (req, res) => {
  const id = req.params.id;

  Task.update(
    { realisee: true },
    { where: { id: id } }
  )
    .then(num => {
      if (num == 1) {
        res.send({
          message: "La tâche a été marquée comme réalisée avec succès."
        });
      } else {
        res.send({
          message: `Impossible de marquer la tâche avec id=${id} comme réalisée. La tâche n'a peut-être pas été trouvée!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors du marquage de la tâche comme réalisée avec id=" + id
      });
    });
};

// Supprimer une tâche avec l'id spécifié dans la requête
exports.delete = (req, res) => {
  const id = req.params.id;

  Task.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "La tâche a été supprimée avec succès!"
        });
      } else {
        res.send({
          message: `Impossible de supprimer la tâche avec id=${id}. La tâche n'a peut-être pas été trouvée!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Impossible de supprimer la tâche avec id=" + id
      });
    });
};

// Supprimer toutes les tâches de la base de données
exports.deleteAll = (req, res) => {
  Task.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} tâches ont été supprimées avec succès!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la suppression de toutes les tâches."
      });
    });
};
