import { Router } from "express";

import {postUserController} from '../controllers/usersController.js';
import { signUpMiddleware } from "../middlewares/signUpMiddleware.js";

const router = Router();

router.post('/sign-up',signUpMiddleware, postUserController);

export default router;