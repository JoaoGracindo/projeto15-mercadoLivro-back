import { usersCollection } from "../database.js";

export async function postUserController(req, res){

    const {name, email, password} = req.body;

    const newUser = {
        name,
        email,
        password
    }

    try{
        await usersCollection.insertOne()

    }catch(err){
        res.status(500).send(err);

    }
}