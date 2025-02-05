// Import required packages here..
import express from 'express'

// Import controller here..
import TaskCtl from '../controllers/task-ctl.js'

// Initiate express routing here..
const router = express.Router()

// Initiate router here..
router.post("/create-task", TaskCtl.createTask)
router.patch("/update-task/:id", TaskCtl.updateTask)
router.delete("/delete-task/:id", TaskCtl.deleteTask)
router.get("/read-tasks", TaskCtl.getTask)
router.get("/read-task/:id", TaskCtl.getTaskById)

// 
export default router