import Joi from "joi";

const productAddToCartSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().uri().required()
})

export {productAddToCartSchema};