const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Task = require('./models/task');

mongoose.connect('mongodb+srv://robin:pantyr77220@cluster0.j3tcx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.post('/api/task', (req,res,next) => {
  const task = new Task({
    ...req.body,
  });
  task.save()
    .then(() => {
      res.status(201).json({ message: 'Nouvelle tâche ajoutée en bdd' });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/api/tasks', (req,res,next) => {
  Task.find()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.delete('/api/task', (req, res, next) => {
  Task.deleteOne({_id: req.body._id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch((error) => res.status(400).json({ error }));
});

app.use((req,res, next) => {
  res.json({ message: 'votre requête a bie reçus' });
});

module.exports = app;
