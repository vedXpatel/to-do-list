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

const fetchTask = async (req,res) => {
    // Task.find({},function(err,tasks){
    //     var taskMap = {};
    //     tasks.forEach(function(task){
    //         taskMap[task._id] = task;
    //     });
    //     res.json(taskMap);
    // })

    let tasks;
    try{
        tasks = await Task.find();
    }catch(err){
        console.log(err.message);
        next();
    }
    res.json({
        tasks:tasks.map(task=>task.toObject({
            getters:true
        }))
    })

}

const deleteTask = async (req,res) => {
    const id = req.params.id;
    Task.findByIdAndDelete(id,function(err){
        if(err){
            res.status(501).json({error:"Failed to deleted Task. Try after some time."})
        }else{
            res.status(201).json({succes:"true",response:"Task deleted successfully"})
        }
    })
}

module.exports = {addTask,fetchTask,deleteTask};