import Joi from "joi";

const productAddToCartSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().uri().required()
})

const productToRemoveCartSchema = Joi.object({
    name: Joi.string().required()
})

export { productAddToCartSchema ,productToRemoveCartSchema};