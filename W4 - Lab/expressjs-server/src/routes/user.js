import express from 'express';
import UserController from '../controllers/user.js';
const router = express.Router();

router.post('/create', UserController.createUser);
router.get('/all', UserController.getAllUsers);

export default router;