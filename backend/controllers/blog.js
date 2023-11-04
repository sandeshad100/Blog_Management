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

export const getBlogs = async (req, res) => {
  const blogs = await BlogModel.find();
  if (blogs.length == 0) {
    res.status(400).json({
      message: "No any blogs Found",
      blogs: [],
    });
  } else {
    res.status(200).json({
      message: "blogs Fetched Successfully",
      blogs,
    });
  }
};

export const getBlogById = async (req, res) => {
  console.log("Blog If Api called");
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      message: "Please provide id(blogId)",
    });
  }
  const blog = await BlogModel.find({ _id: id });
  if (blog.length == 0) {
    res.status(400).json({
      message: "No any blog found with that id",
      blog: [],
    });
  } else {
    res.status(200).json({
      message: "Blog fetched successfully",
      blog,
    });
  }
};
