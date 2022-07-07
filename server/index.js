const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/config');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());
const tasks = require('./routes/tasks');

const PORT = process.env.PORT || 3333;

connectDB();

app.use('/',tasks);

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
