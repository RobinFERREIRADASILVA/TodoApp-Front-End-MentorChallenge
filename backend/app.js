const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const taskRoutes = require('./routes/task');
const userRoutes = require('./routes/user');

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

app.use('/api/task', taskRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
