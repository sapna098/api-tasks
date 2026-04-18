# Task management of API

This is a task management API backened 

# Routes and the endpoints

## /tasks
GET: Get all the list of the tasks in the system
POST: Create a new task

## /tasks/{id}
GET: Get a task
PUT: Update a task
DELETE: Deleting a task 

## Learned new thing
PATCH: it makes "false -> true" and "true -> false"

## ID Generation Strategy
Task ID is generated automatically by the server
Uses auto-increment method (tasks.length + 1)
Client does NOT provide ID in request

## Commands
npm init
npm i express
npm i nodemon 
npm run dev

To restore node_modules and package-lock.json => npm i/npm install

npm i mongoose

npm i mongodb

npm i dotenv