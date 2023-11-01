import { BlogCategory } from "../model/blogCategoryModel.js";

export const CreateCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    console.log("Type of: " + categoryName + " " + typeof categoryName);

    if (!categoryName) {
      return res.status(400).json({
        message: "Category name needed",
      });
    }
    await BlogCategory.create({
      categoryName,
    });

    res.status(201).json({
      success: true,
      message: "Category created",
    });
  } catch (error) {
    console.log("Category Error: ", error);
  }
};
