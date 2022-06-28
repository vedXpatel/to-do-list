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

const fetchTask = (req,res) => {
    Task.find({},function(err,tasks){
        var taskMap = {};
        tasks.forEach(function(task){
            taskMap[task._id] = task;
        });
        res.json(taskMap);
    })
}

const deleteTask = (req,res) => {
    const {id} = req.params;
    Task.findByIdAndDelete(id,function(err){
        if(err){
            res.status(501).json({success:false,error:err.message});
        }else{
            res.state(201).json({success:true,message:"Task deleted successfully"});
        }
    })
}

module.exports = {addTask,fetchTask,deleteTask};