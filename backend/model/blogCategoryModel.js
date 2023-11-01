import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the blogCategory schema
const blogCategorySchema = new Schema({
  // The _id field will be automatically generated and unique
  categoryName: {
    type: String,
    required: [true, "Category name is required"],
  },
  // Add more fields related to the category if needed
});

// Create the blogCategory model
export const BlogCategory = mongoose.model("blogCategory", blogCategorySchema);
