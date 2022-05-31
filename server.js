const express = require('express');
const connectDB = require('./db');
require('dotenv').config(); //give access to the env variables
const {PORT} = process.env;


//connect to db
connectDB();

//initialise express
const app = express();

//initialise express middleware
app.use(express.json({extended: false}));

//create a basic route
app.get('/', (req, res)=>{
    res.send({
        message: 'Welcome to node app'
    })
})

//port
const port = PORT

//listen to connection
app.listen(port, () => console.log(`app running on ${port}`));
