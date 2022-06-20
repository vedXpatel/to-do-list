const mongoose = require('mongoose')

const toDoListSchema = mongoose.Schema({
    task:String,
    time:Date,
})

module.exports = mongoose.model('task',toDoListSchema);