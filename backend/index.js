import express from "express";
import cors from 'cors';
import 'dotenv/config';
import { configureDb } from "./db.js";
import router from "./Routes/CreateUser.js";
import routerDisplay from "./Routes/DisplayData.js";
import routerOrder from "./Routes/OrderData.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(routerDisplay);
app.use(routerOrder);
app.get("/", (req, res) => {
    res.send("🚩🚩🚩🚩Jay Shri Ram...🚩🚩🚩🚩");
})

app.listen((process.env.PORT), () => {
    configureDb();
    console.log(`Server is running on port ${process.env.PORT}`);
})