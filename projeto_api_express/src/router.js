const express = require('express')
const taskController = require('./controllers/taskController')
const taskMiddlewares = require('./middlewares/taskMiddlewares')
const router = express.Router()

router.get('/tasks', taskController.getAll)
router.post(
    '/tasks',
    taskMiddlewares.validateBody, 
    taskController.createTask
)
router.delete('/tasks/:id', taskController.deleteTask)

router.put(
    '/tasks/:id',
    taskMiddlewares.validateBody,
    taskMiddlewares.validateFieldStatus, 
    taskController.updateTask
)

module.exports = router