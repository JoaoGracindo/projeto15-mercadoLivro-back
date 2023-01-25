import { signUpSchema } from "../schemas/userSignUpSchema";
import usersCollection from '../database.js';

export async function signUpMiddleware(req, res, next){

    const newUser = req.body;
    const {error} = signUpSchema.validate(newUser,{abortEarly: false});

    if(error){
        const errorMessages = error.details.map(obj => obj.message);
        return res.status(400).send(errorMessages);
    }

    const userExists =  await usersCollection.findOne({email: newUser.email});
    if(userExists) return res.status(409).send('Usuario já existe');

    next();
}