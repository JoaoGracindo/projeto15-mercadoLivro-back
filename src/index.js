import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import userRoutes from './routes/usersRoutes.js';
import shoppingCartRoutes from './routes/shoppingCartRoutes.js';

const app = express();
app.use(json());
app.use(cors());

app.use(userRoutes);
app.use(shoppingCartRoutes);

app.listen(process.env.PORT, () => console.log('Server is running...'))