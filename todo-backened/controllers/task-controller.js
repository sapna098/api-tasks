const Task = require("../models/tasks")

exports.getAllTask = async(req,res)=>{
    const tasks = await Task.find()
    if(!tasks || tasks.length === 0){
        return res.status(404).json({
            success: false,
            message: "There is no task"
        })
    }
    res.status(200).json({
        success: true,
        data: tasks
    })
}

exports.getTaskById = async(req,res) => {
    const {id} = req.params
    const task = await Task.findById(id)
    if(!task){
        return res.status(404).json({
            success: false,
            message: "ID dosen't exist"
        })
    }
    res.status(200).json({
        success: true,
        data: task
    })
}

exports.createNewTask = async(req,res) => {
    console.log("BODY:", req.body);
    const { title, description} = req.body;
    if(!title?.trim() || !description?.trim() ){
        return res.status(400).json({
            success: false,
            message: "Please provide all the tasks"
        })
    }
    await Task.create({
  title,
  description
});
    const allTasks = await Task.find()
    res.status(201).json({
        success: true,
        data: allTasks,
        message: "Created successfully"
    })
}

exports.updatetaskById = async(req,res) => {
    const {id} = req.params
    const {data} = req.body

    const task = await Task.findById(id)

    if(!task){
        return res.status(404).json({
            success: false,
            message: "Task not found"
        })
    }

    const updatedTask = await Task.findOneAndUpdate(
        {_id: id},
        data,
        {new: true}
    )

    res.status(200).json({
        success: true,
        message: "Updated successfully",
        data: updatedTask
    })
}

exports.deleteTaskById = async(req,res) => {
    const {id} = req.params
    const task = await Task.findById(id)
    if(!task){
        return res.status(404).json({
            success: false,
            message: "Id not found"
        })
    }
    await Task.findByIdAndDelete(id)
    res.status(200).json({
        success: true,
        message: "Deleted successfully"
    })
}

exports.toggleTaskById = async(req,res) => {
    const {id} = req.params
    const task = await Task.findById(id)
    if(!task){
        return res.status(404).json({
            success: false,
            message: "ID not found"
        })
    }
    task.completed = !task.completed
    await task.save()
    res.status(200).json({
        success: true,
        message: "Task status updated",
        data: task
    })
}