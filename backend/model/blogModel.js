import mongoose from "mongoose";
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    blogTitle: {
      type: String,
      required: [true, "Blog name required"],
    },
    blogDescription: {
      type: String,
      required: [true, "Blog Description required"],
    },
    blogCategoryId: {
      type: Schema.Types.ObjectId,
      ref: "BlogCategory",
      required: [true, "Category is required"],
    },
    blogAuthorId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: [true, "Blog Author Required"],
    },
  },
  {
    timestamps: true,
  }
);

export const BlogModel = mongoose.model("blog", blogSchema);
