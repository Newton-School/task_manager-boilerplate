const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/tasks', taskController.createTask);
router.patch('/tasks/update-status', taskController.updateTaskStatus);
router.get('/tasks/search', taskController.searchTasks);

module.exports = router;
