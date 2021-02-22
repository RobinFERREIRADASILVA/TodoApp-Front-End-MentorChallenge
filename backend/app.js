const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/tasks', (req,res,next) => {
  const tasks = [
    {
      id: 1,
      label: 'Coder une todolist en impératif',
      done: true,
    },
    {
      id: 13,
      label: 'Coder une todolist en React',
      done: false,
    },
    {
      id: 4,
      label: 'Appeler Jean-Marc',
      done: false,
    },
    {
      id: 8,
      label: 'Préparer des crêpes',
      done: false,
    },
  ];
  res.status(200).json(tasks);
});

app.use((req,res, next) => {
  res.json({ message: 'votre requête a bie reçus' });
});

module.exports = app;
