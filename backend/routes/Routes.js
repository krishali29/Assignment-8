const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

router.get('/', controller.getTasks);
router.post('/', controller.createTask);
router.get('/:id', controller.getTaskById);
router.put('/:id', controller.updateTask);
router.patch('/:id', controller.updateTask);
router.patch('/:id/status', controller.updateStatus);
router.delete('/:id', controller.deleteTask);

module.exports = router;
