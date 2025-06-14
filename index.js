const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 

const app = express();
dotenv.config();

//parse JSON
app.use(express.json());

//routes
const reviewRoutes = require('./routes/feedbackroutes');
app.use('/feedback', reviewRoutes);

//mongodb connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected');
        app.listen(process.env.PORT || 3000, () => {
            console.log(`server running on ${process.env.PORT}`);
        });
    })
    .catch((err) => console.log(err)); 

