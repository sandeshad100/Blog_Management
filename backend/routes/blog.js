import express from "express";

import { CreateBlog } from "../controllers/blog.js";

const router = express.Router();

router.post("/create", CreateBlog);

export default router;
