const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const cookieParser =  require('cookie-parser');


const app = express();

app.use(cors());
app.use(express.json())
app.use(cookieParser());

app.get('/', (req, res)=>{

      res.send("server is running");
});

const port = process.env.PORT | 8080;

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

mongoose.connect(process.env.Mongo_url)
    .then(() => console.log('Database Connected:', process.env.Mongo_url))
    .catch(error => console.error('Database Connection Error:', error));

const userRoute = require('./Routes/UserRoute');

app.use('/api/v1', userRoute);


