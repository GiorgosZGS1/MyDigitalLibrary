import express from "express";
import { PORT, mongoDBURL } from './config.js';
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for CORS handling


app.get('/', (req, res) =>
{
    console.log(req);
    return res.status(234).send('Welcome to MERN Stack')
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() =>
    {
        console.log('App connected to DB');
        app.listen(PORT, () =>
        {
            console.log(`App is listeling to port: ${PORT}`);
        })
    })
    .catch((error) =>
    {
        console.log(error);
    });