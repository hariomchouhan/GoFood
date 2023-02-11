import express from "express";
import { body, validationResult } from "express-validator";
import { UserModel } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', "Invalid Password").isLength({ min: 5 })],

    async (request, response) => {

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        try {
            const newPassword = await bcrypt.hashSync(request.body.password, 12);
            request.body["password"]=newPassword;
            await UserModel.create(request.body);
            response.status(201).json({ message: "User created" });
        } catch (error) {
            response.status(500).json(error);
            console.log(error);
        }
    }
)

router.post("/loginuser", [
    body('email').isEmail(),
    body('password', "Invalid Password").isLength({ min: 5 })],
    async (request, response) => {

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const email = request.body.email;
        try {
            const userData = await UserModel.findOne({ email });
            if (!userData) {
                return response.status(404).json({ message: "User not found" });
            }
            const isMatch = await bcrypt.compareSync(request.body.password, userData.password);
            if (!isMatch) {
                return response.status(400).json({ message: "Invalid Password" });
            }
            else {
                const data = {
                    user: {
                        id: userData.id
                    }
                }
                const token = jwt.sign(data, process.env.JWT_SECRET)
                return response.status(200).json({ message: "User logged in", token });
            }
        } catch (error) {
            console.log(error);
            response.status(500).json(error);
        }
    }
)

export default router;