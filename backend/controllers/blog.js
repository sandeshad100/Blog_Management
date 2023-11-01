import { BlogModel } from "../model/blogModel.js";

export const CreateBlog = async (req, res) => {
  try {
    const { blogTitle, blogDescription, blogCategoryId, blogAuthorId } =
      req.body;
    console.log(blogTitle, blogDescription, blogCategoryId, blogAuthorId);

    if (!blogTitle || !blogDescription || !blogCategoryId || !blogAuthorId) {
      return res.status(400).json({
        message:
          "All required fields (blogTitle, blogDescription, blogCategoryId, blogAuthorId) must be provided",
      });
    }
    await BlogModel.create({
      blogTitle,
      blogDescription,
      blogCategoryId,
      blogAuthorId,
    });

    res.status(201).json({
      success: true,
      message: "Blog created",
    });
  } catch (error) {
    console.log("Blog Error: ", error);
  }
};
