import bcrypt from 'bcrypt';

import { usersCollection, sessionsCollection } from "../database.js";


export async function postUserController(req, res){

    const {name, email, password} = req.body;

    const newUser = {
        name,
        email,
        password: bcrypt.hashSync(password, 10)
    };

    try{
        await usersCollection.insertOne(newUser);

    }catch(err){
        res.status(500).send(err);
    }
    return res.sendStatus(201);
}

export async function loginController(req, res){

    const {email, password} = req.body;
    let isValidLogin;

    try{
        const user = await usersCollection.findOne({email});
        isValidLogin = bcrypt.compareSync()
    }
}