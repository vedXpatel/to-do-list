const express = require('express');
const router = express.Router();
const addTask = require('../controllers/task');

router.post('/tasks',addTask )

module.exports = router;