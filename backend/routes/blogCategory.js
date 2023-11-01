import express from "express";

import { CreateCategory } from "../controllers/blogCategory.js";

const router = express.Router();

router.post("/create", CreateCategory);

export default router;
