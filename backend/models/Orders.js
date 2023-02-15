import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    order_data: { type: Array, required: true }
})

export const OrderModel = mongoose.model("order", OrderSchema);