import mongoose from "mongoose";
import 'dotenv/config';

export async function configureDb() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected to database");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(function(error, data){
            if(error) console.log(error);
            else console.log();
        })
    } catch (error) {
        console.log(error);
    }
}