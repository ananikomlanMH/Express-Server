const compression = require('compression')
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

// Charger les variables d'environnement
dotenv.config();

const app = express();

app.use(compression());
app.use(morgan('dev'));

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// Analyser les requêtes de type content-type - application/json
app.use(bodyParser.json({limit: '50mb'}));
// Analyser les requêtes de type content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

// Connexion à la base de données
const db = require("./app/models");

// En développement, synchroniser la base de données
db.sequelize.sync({ alter: true }).then(() => {
  console.log("Base de données synchronisée.");
  
  // Exécuter les seeders après la synchronisation de la base de données
  if (process.env.NODE_ENV === 'development') {
    const runSeeders = require('./app/seeders');
    runSeeders().then(() => {
      console.log("Données de test chargées avec succès.");
    }).catch(err => {
      console.error("Erreur lors du chargement des données de test:", err);
    });
  }
}).catch(err => {
  console.error("Erreur lors de la synchronisation de la base de données:", err);
});

// Route simple
app.get("/", (req, res) => {
  res.json({ message: "Bienvenu sur l'API de l'application ToDoList." });
});

// Routes
require('./app/routes/task.routes')(app);
require('./app/routes/personnel.routes')(app);

// Définir le port et écouter les requêtes
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Le serveur est en cours d\'exécution sur le port', PORT);
});

