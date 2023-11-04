import express from "express";

import { CreateBlog, getBlogs, getBlogById } from "../controllers/blog.js";

const router = express.Router();

router.post("/create", CreateBlog);
router.get("/get", getBlogs);
router.get("/get/:id", getBlogById);

export default router;
