const Task = require('../models/task');

exports.createTask = (req,res, next) => {
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
};

exports.getTasks = (req,res,next) => {
  Task.find()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.deleteTask = (req, res, next) => {
  Task.deleteOne({_id: req.body._id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch((error) => res.status(400).json({ error }));
};
