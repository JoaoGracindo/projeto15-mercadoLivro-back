import Joi from "joi";

const signUpSchema = Joi.object({
    name: Joi.string().min(3).required(),
    password: Joi.string().min(8).required(),
    confirm: Joi.string().required().valid(Joi.ref('password')),
    email: Joi.string().email().required()

})

export {signUpSchema};