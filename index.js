import express, { json } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv'; 
import reviewRoutes from './routes/feedback-routes';

const app = express();
config();

//parse JSON
app.use(json());

//routes
app.use('/feedback', reviewRoutes);

//mongodb connection
connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected');
        app.listen(process.env.PORT || 3000, () => {
            console.log(`server running on ${process.env.PORT}`);
        });
    })
    .catch((err) => console.log(err)); 

