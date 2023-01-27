import { Router } from "express";
import { AddToCart, GetCart, RemoveFromCart } from "../controllers/shoppingCartController.js";
import { authUserMiddleware } from "../middlewares/authUserMiddleware.js";
import { shoppingCartMiddleware } from "../middlewares/shoppingCartMiddleware.js";

const router = Router();

router.get('/shopping-cart', authUserMiddleware, GetCart)
router.post('/shopping-cart', authUserMiddleware, shoppingCartMiddleware, AddToCart);
router.delete('/shopping-cart', authUserMiddleware, RemoveFromCart);

export default router;