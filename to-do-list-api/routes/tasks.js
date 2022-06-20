const express = require('express');
const router = express.Router();
const {addTask,fetchTask} = require('../controllers/task');

router.post('/tasks',addTask )
router.get('/tasks',fetchTask)

module.exports = router;