import express from 'express';
import { validateIsEmpty } from '../middlewares/validateTask/validateTask.js';
import { addTask ,getTasks ,updateTask,updateStatus } from '../controllers/task_controller/task-controller.js';
import { deleteTask } from '../controllers/task_controller/task-controller.js';
const router = express.Router();

router.post('/add',addTask);
router.get('/tasks',getTasks);
router.post('/delete',deleteTask);
router.post('/update',updateTask);
router.post('/status',updateStatus);

export default router