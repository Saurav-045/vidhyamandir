import express from "express";
import { addUser, getUser } from "../controller/User_controller.js";

export const router = express.Router();

router.post("/add", addUser);
router.get("/get", getUser);