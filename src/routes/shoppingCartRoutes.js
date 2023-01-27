import { Router } from "express";
import { AddToCart } from "../controllers/shoppingCartController.js";
import { authUserMiddleware } from "../middlewares/authUserMiddleware.js";
import { shoppingCartMiddleware } from "../middlewares/shoppingCartMiddleware.js";

const router = Router();

router.post('/shopping-cart',authUserMiddleware , shoppingCartMiddleware, AddToCart);

export default router;