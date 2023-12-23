import express, { response } from 'express';
import mongoose from 'mongoose';
import booksRoute from '../routes/booksRoute.js';
import { mongoDBURL } from '../config.js';
import cors from 'cors';
const app = express();
app.use(express.json());

// Middleware for CORS policy
// app.use(
//   cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST', 'PUT','DELETE'],
//     allowedHeaders:['Content-Type']
//   })
// )
app.use(cors());
const PORT = 3000 || process.env.PORT;

app.get("/",(request, response)=>{
    console.log(request);
    return response.status(234).send("Welcome to MERN Stack Project")   
})

app.use("/books",booksRoute);


mongoose
.connect(mongoDBURL)
.then(() => {
  console.log('App connected to database');
  app.listen(PORT, () => {
    console.log(`App is listening to port: ${Port}`);
  });
})
.catch((error) => {
  console.log(error);
});