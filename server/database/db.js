import mongoose from 'mongoose';

const Connection = async (DB_USERNAME, DB_PASSWORD) => {
    const URL = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@ac-hfufgc2-shard-00-00.kovftlh.mongodb.net:27017,ac-hfufgc2-shard-00-01.kovftlh.mongodb.net:27017,ac-hfufgc2-shard-00-02.kovftlh.mongodb.net:27017/Taskify?ssl=true&replicaSet=atlas-1279ue-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

    try {
        const connection = await mongoose.connect(URL)
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error Occured: " + err);
    }
}

export default Connection