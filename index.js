const express = require('express')
const {tasks} = require("../assignment 7/data/tasks.json")

const app = express()

app.use(express.json())

//For home page
app.get("/",(req,res)=>{
    res.status(200).json({
        message : "Hello world!"
    })
})

// For getting all the tasks
app.get("/tasks",(req,res)=>{
    res.status(200).json({
        success: true,
        data: tasks
    })
})

//GET: Get a task by their id
app.get("/tasks/:id",(req,res)=>{
    const id = Number(req.params.id);
    const task = tasks.find((each)=>each.id===id)
    if(!task){
        return res.status(404).json({
            success: false,
            message: `Task not found for id : ${id}`
        })
    }
    res.status(200).json({
        success: true,
        data: task
    })
})

//POST: Create a new task
app.post("/tasks", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields"
    });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json({
    success: true,
    message: "Task created successfully",
    data: newTask
  });
});

//PUT: Update a task by their id
app.put("/tasks/:id",(req,res)=>{
    const id = Number(req.params.id)
    const { title, description, completed } = req.body
    const task = tasks.find((each)=>each.id===id)
    if(!task){
        return res.status(404).json({
            success: false,
            message: "Task not found"
        })
    }
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (completed !== undefined) task.completed = completed;
    res.status(200).json({
        success: true,
        data: task,
        message: "updated successfully"
    })
})

//DELETE: Deleting a task by their id
app.delete("/tasks/:id",(req,res)=>{
    const id = Number(req.params.id)
    const task = tasks.find((each)=>each.id===id)
    if(!task){
        return res.status(404).json({
            success: false,
            message: "No id found"
        })
    }
    tasks = tasks.filter(task => task.id !== id);

    res.status(200).json({
        success: true,
        data: task,
        message: "The task deleted successfully"
    })
})

//PATCH: it makes "false -> true" and "true -> false"
app.patch("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((each) => each.id === id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  task.completed = !task.completed;

  res.status(200).json({
    success: true,
    data: task,
    message: "Task status updated"
  });
});

const PORT = 3000

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    
})