import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';

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
    const token = uuid();
    let isValidLogin;

    try{
        const user = await usersCollection.findOne({email});
        isValidLogin = bcrypt.compareSync(password, user.password);
        if(!isValidLogin) return res.status(400).send('E-mail ou senha incorreto.');

        await sessionsCollection.insertOne({token, userId: user._id})
    }catch(err){
        return res.status(500).send(err);
    }
    return res.status(200).send(token);
}