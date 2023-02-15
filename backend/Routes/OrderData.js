import express from "express";
import { OrderModel } from "../models/Orders.js";

const routerOrder = express.Router();

routerOrder.post("/orderdata", async (request, response) => {
    let data = request.body.order_data;
    await data.splice(0, 0, { order_date: request.body.order_date })

    // if email not existing in db then create: else: InsertMany()
    let eId = await OrderModel.findOne({ 'email': request.body.email });
    console.log(eId);
    if (eId === null) {
        try {
            await OrderModel.create({
                email: request.body.email,
                order_data: [data]
            }).then(() => {
                response.json({ success: true });
            })
        } catch (error) {
            console.log(error.message);
            response.send("Server Error", error.message);
        }
    }

    else {
        try {
            await OrderModel.findOneAndUpdate({ email: request.body.email },
                { $push: { order_data: data } }).then(() => {
                    response.json({ success: true });
                })
        } catch (error) {
            console.log(error.message);
            response.send("Server Error", error.message);
        }
    }
})

export default routerOrder;