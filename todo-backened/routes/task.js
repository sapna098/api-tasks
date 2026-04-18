const express = require("express")
const {tasks} = require("../data/tasks.json")

const Task = require("../models/tasks")
const { getAllTask ,getTaskById, createNewTask, updatetaskById, deleteTaskById, toggleTaskById } = require("../controllers/task-controller")

const router = express.Router()

// For getting all the tasks
// router.get("/tasks",(req,res)=>{
//     res.status(200).json({
//         success: true,
//         data: tasks
//     })
// })
router.get("/",getAllTask)

//GET: Get a task by their id
// router.get("/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const task = tasks.find((each)=>each.id===id)
//     if(!task){
//         return res.status(404).json({
//             success: false,
//             message: `Task not found for id : ${id}`
//         })
//     }
//     res.status(200).json({
//         success: true,
//         data: task
//     })
// })
router.get("/:id",getTaskById)

//POST: Create a new task
// router.post("/", (req, res) => {
//   const { title, description } = req.body;

//   if (!title || !description) {
//     return res.status(400).json({
//       success: false,
//       message: "Please fill all required fields"
//     });
//   }

//   const newTask = {
//     id: tasks.length + 1,
//     title,
//     description,
//     completed: false
//   };

//   tasks.push(newTask);

//   res.status(201).json({
//     success: true,
//     message: "Task created successfully",
//     data: newTask
//   });
// });
router.post("/",createNewTask)

//PUT: Update a task by their id
// router.put("/:id",(req,res)=>{
//     const id = Number(req.params.id)
//     const { title, description, completed } = req.body
//     const task = tasks.find((each)=>each.id===id)
//     if(!task){
//         return res.status(404).json({
//             success: false,
//             message: "Task not found"
//         })
//     }
//     if (title !== undefined) task.title = title;
//     if (description !== undefined) task.description = description;
//     if (completed !== undefined) task.completed = completed;
//     res.status(200).json({
//         success: true,
//         data: task,
//         message: "updated successfully"
//     })
// })
router.put("/:id",updatetaskById)

//DELETE: Deleting a task by their id
// router.delete("/:id",(req,res)=>{
//     const id = Number(req.params.id)
//     const task = tasks.find((each)=>each.id===id)
//     if(!task){
//         return res.status(404).json({
//             success: false,
//             message: "No id found"
//         })
//     }
//     tasks = tasks.filter(task => task.id !== id);

//     res.status(200).json({
//         success: true,
//         data: task,
//         message: "The task deleted successfully"
//     })
// })
router.delete("/:id",deleteTaskById)

//PATCH: it makes "false -> true" and "true -> false"
// router.patch("/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const task = tasks.find((each) => each.id === id);

//   if (!task) {
//     return res.status(404).json({
//       success: false,
//       message: "Task not found"
//     });
//   }

//   task.completed = !task.completed;

//   res.status(200).json({
//     success: true,
//     data: task,
//     message: "Task status updated"
//   });
// });
console.log("PATCH handler:", toggleTaskById);
router.patch("/:id",toggleTaskById)

module.exports = router