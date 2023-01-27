import { productAddToCartSchema } from "../schemas/shoppingCartSchema.js";

export async function shoppingCartMiddleware(req, res, next) {
    const newProduct = req.body;
    const { error } = productAddToCartSchema.validate(newProduct, { abortEarly: false });

    if (error) {
        const errorMessages = error.details.map(obj => obj.message);
        return res.status(400).send(errorMessages);
    }
    next()
}
