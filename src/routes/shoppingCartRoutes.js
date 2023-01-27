import { Router } from "express";
import { FinalizePurchase } from "../controllers/checkoutController.js";
import { AddToCart, GetCart, RemoveFromCart } from "../controllers/shoppingCartController.js";
import { authUserMiddleware } from "../middlewares/authUserMiddleware.js";
import { checkoutMiddleware } from "../middlewares/checkoutMiddleware.js";
import { shoppingCartMiddleware } from "../middlewares/shoppingCartMiddleware.js";

const router = Router();

router.get('/shopping-cart', authUserMiddleware, GetCart)
router.post('/shopping-cart', authUserMiddleware, shoppingCartMiddleware, AddToCart);
router.delete('/shopping-cart', authUserMiddleware,checkoutMiddleware, RemoveFromCart);
router.post('/checkout',authUserMiddleware,FinalizePurchase)

export default router;