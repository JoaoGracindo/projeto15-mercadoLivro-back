import { Router } from "express";

import {loginController, postUserController} from '../controllers/usersController.js';
import { signUpMiddleware } from "../middlewares/signUpMiddleware.js";

const router = Router();

router.post('/sign-up',signUpMiddleware, postUserController);
router.post('/', loginController)

export default router;