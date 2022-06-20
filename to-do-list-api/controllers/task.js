const Task = require('../models/task');
var today = new Date();

const addTask = (req,res) => {
    const testTask = req.body.task;
    if(!testTask) {
        return res.status(404).json({msg:"Task cannot be empty"})
    }
    try{
        const newTask = new Task({
            task:testTask,
            time:today.getTime()
        })
        newTask.save();
        console.log(`task added: ${testTask} `)
        res.json({success:true,task:newTask})
    } catch(err){
        console.log(err.message);
    }
}

module.exports = addTask;