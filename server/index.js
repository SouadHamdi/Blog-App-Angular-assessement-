
const express =require('express');

const cors =require('cors');

const db =require( "./database-mongodb/index.js");
const app=express();
app.use(express.json());
app.use(cors());


const PORT = 3000;

app.use(cors());

app.use('/blogs',require('./routes/blogs.js'));
app.listen(PORT, ()=>{console.log("connected")});

