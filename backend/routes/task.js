const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task');

router.post('/task', taskController.createTask);
router.get('/tasks', taskController.getTasks);
router.delete('/task', taskController.deleteTask);

module.exports = router;
