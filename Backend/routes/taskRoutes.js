// routes/taskRoutes.js
const express = require('express');
const taskController = require('../controllers/taskController');

const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Define task-related routes
router.post('/create', authMiddleware, taskController.createTask);
router.get('/', authMiddleware, taskController.getTasks);
router.put('/:id', authMiddleware, taskController.updateTask);
router.delete('/:id', authMiddleware, taskController.deleteTask);

module.exports = router;
