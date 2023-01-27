import { productToRemoveCartSchema } from "../schemas/shoppingCartSchema.js";

export async function checkoutMiddleware(req, res, next) {
    const newProduct = req.body;
    const { error } = productToRemoveCartSchema.validate(newProduct, { abortEarly: false });

    if (error) {
        const errorMessages = error.details.map(obj => obj.message);
        return res.status(400).send(errorMessages);
    }
    next()
}