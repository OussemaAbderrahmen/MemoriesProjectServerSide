import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
const app = express();
//http://localhost:5000/posts
app.use('/posts',postRoutes);

app.use(bodyparser.json({limit: "30mb" , extended: true}));
app.use(bodyparser.urlencoded({limit: "30mb" , extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://oussemaAbderrahmen:Ouss1996@cluster0.a1mn3cz.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL ,{useNewUrlParser: true})
.then(()=> app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)))
.catch((error)=> console.log(error.message));

//mongodb.com/cloud/atlas