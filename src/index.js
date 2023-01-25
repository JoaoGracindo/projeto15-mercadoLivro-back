import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import userRoutes from './routes/usersRoutes.js';

const app = express();
app.use(json());
app.use(cors());

app.use(userRoutes);

app.listen(process.env.PORT, () => console.log('Server is running...'))