const express = require('express')
const {tasks} = require("./data/tasks.json")
const dbConnection = require("./databaseConnection")
const dotenv = require("dotenv")
const cors = require("cors");

const app = express()

const taskRouter = require("./routes/task")

dotenv.config()
dbConnection()

app.use(cors());
app.use(express.json())

//For home page
app.get("/",(req,res)=>{
    res.status(200).json({
        message : "Hello world!"
    })
})

app.use("/tasks",taskRouter)

const PORT = 3000

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    
})