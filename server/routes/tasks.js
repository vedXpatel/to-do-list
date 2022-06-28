const express = require('express');
const router = express.Router();
const {addTask,fetchTask,deleteTask} = require('../controllers/task');

router.post('/tasks',addTask )
router.get('/tasks',fetchTask)
router.post('/deleteTask/:id',deleteTask)

module.exports = router;