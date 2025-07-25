import express from "express";
import { createCollection } from "../controllers/createCollection.js";

const router = express.Router();

router.post("/collection", createCollection);

export default router;
