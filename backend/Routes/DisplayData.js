import express from "express";

const routerDisplay = express.Router();

routerDisplay.post("/foodData", (request, response)=>{
    try {
        response.status(200).json([global.food_items, global.food_category]);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
})

export default routerDisplay;