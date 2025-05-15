const db = require("../models");
const Personnel = db.personnels;
const Task = db.tasks;
const Op = db.Sequelize.Op;

// Créer et sauvegarder un nouveau personnel
exports.create = (req, res) => {
  // Valider la requête
  if (!req.body.nom || !req.body.prenom || !req.body.email) {
    res.status(400).send({
      message: "Le nom, prénom et email sont obligatoires!"
    });
    return;
  }

  // Créer un personnel
  const personnel = {
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    telephone: req.body.telephone,
    poste: req.body.poste,
    departement: req.body.departement
  };

  // Sauvegarder le personnel dans la base de données
  Personnel.create(personnel)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la création du personnel."
      });
    });
};

// Récupérer tous les personnels de la base de données
exports.findAll = (req, res) => {
  const nom = req.query.nom;
  var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;

  Personnel.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la récupération des personnels."
      });
    });
};

// Trouver un personnel avec un id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Personnel.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Personnel avec id=${id} non trouvé.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la récupération du personnel avec id=" + id
      });
    });
};

// Trouver un personnel avec ses tâches
exports.findOneWithTasks = (req, res) => {
  const id = req.params.id;

  Personnel.findByPk(id, {
    include: [{
      model: Task,
      as: 'taches'
    }]
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Personnel avec id=${id} non trouvé.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la récupération du personnel avec id=" + id
      });
    });
};

// Mettre à jour un personnel identifié par l'id dans la requête
exports.update = (req, res) => {
  const id = req.params.id;

  Personnel.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Le personnel a été mis à jour avec succès."
        });
      } else {
        res.send({
          message: `Impossible de mettre à jour le personnel avec id=${id}. Le personnel n'a pas été trouvé ou req.body est vide!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la mise à jour du personnel avec id=" + id
      });
    });
};

// Supprimer un personnel avec l'id spécifié dans la requête
exports.delete = (req, res) => {
  const id = req.params.id;

  Personnel.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Le personnel a été supprimé avec succès!"
        });
      } else {
        res.send({
          message: `Impossible de supprimer le personnel avec id=${id}. Le personnel n'a peut-être pas été trouvé!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Impossible de supprimer le personnel avec id=" + id
      });
    });
};

// Supprimer tous les personnels de la base de données
exports.deleteAll = (req, res) => {
  Personnel.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} personnels ont été supprimés avec succès!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la suppression de tous les personnels."
      });
    });
};
