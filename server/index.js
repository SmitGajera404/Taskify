import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/routes.js';
import Connection from './database/db.js';
dotenv.config()

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',router);


app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

Connection(process.env.DB_USERNAME,process.env.DB_PASSWORD)


