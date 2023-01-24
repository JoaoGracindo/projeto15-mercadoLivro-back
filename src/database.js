import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URI);

await mongoClient.connect();
const db = mongoClient.db();

const usersCollection = db.collection('users');


export {
    usersCollection
};