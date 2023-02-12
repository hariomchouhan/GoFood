import mongoose from "mongoose";
import 'dotenv/config';

export async function configureDb() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected to database");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function (error, data) {
            const foodCategory = await mongoose.connection.db.collection("food_category");
            foodCategory.find({}).toArray(function (error, catData) {
                if (error) console.log(error);
                else {
                    global.food_items = data;
                    global.food_category = catData;
                }
            })
        })
    } catch (error) {
        console.log(error);
    }
}