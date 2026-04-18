#  Task Management API

## Objective

To build a backend system for a To-Do List application and integrate it with a frontend (React) for a fully functional task manager.

## Tech Stack

Node.js
Express.js
MongoDB (Mongoose)
Axios (Frontend Integration)
CORS
Dotenv

##  Base URL

http://localhost:3000/tasks


##  API Endpoints

### 1. Get All Tasks

**GET** `/tasks`
**Description:** Fetch all tasks

**Response:**

json
{
  "success": true,
  "data": []
}


### 2. Get Task by ID

**GET** `/tasks/:id`
**Description:** Fetch a single task


### 3. Create New Task

 **POST** `/tasks`
 **Description:** Add a new task

**Request Body:**

json
{
  "title": "Task title",
  "description": "Task description"
}


**Response:**

json
{
  "success": true,
  "data": {
    "_id": "...",
    "title": "...",
    "description": "...",
    "completed": false
  }
}


### 4. Update Task

**PUT** `/tasks/:id`
**Description:** Update task details

**Request Body:**

json
{
  "data": {
    "title": "Updated title",
    "description": "Updated description"
  }
}


### 5. Delete Task

**DELETE** `/tasks/:id`
**Description:** Delete a task


###  6. Toggle Task Status

**PATCH** `/tasks/:id`
**Description:** Toggle task completion
**Logic:**

`false → true`
`true → false`


## ID Generation Strategy

MongoDB automatically generates `_id`
Client does **NOT** send ID
Backend handles unique identification


## Features Implemented

Create task
Read all tasks
Read task by ID
Update task
Delete task
Toggle completion status
MongoDB integration
MVC structure (Model, Controller, Routes)
API integration with React frontend


## Error Handling

400 → Bad Request (missing data)
404 → Task not found
500 → Server error

## Frontend Integration

Connected with React app using Axios
Supports:

  Add task
  Delete task
  Toggle status
  Dynamic UI updates


## Testing

Tested using **Postman**
Verified all endpoints:

  GET
  POST
  PUT
  DELETE
  PATCH

##  Installation & Setup

npm init
npm install express mongoose mongodb cors dotenv nodemon

## ▶️ Run Project

npm run dev

## 🔄 Restore Dependencies

npm install

## What I Learned

REST API design
CRUD operations
MongoDB with Mongoose
Express routing
Error handling
API integration with React
Axios usage
Backend–Frontend communication

