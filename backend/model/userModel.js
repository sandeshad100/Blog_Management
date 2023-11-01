import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "UserName must be provided"],
    },
    userPhoneNumber: {
      type: Number,
      required: [true, "PhoneNumber must be provided"],
    },
    userEmail: {
      type: String,
      required: [true, "userEmail must be provided"],
    },
    userPassword: {
      type: String,
      required: [true, "Password must be provided"],
    },
  },
  {
    timestamps: true, // This option adds the createdAt and updatedAt fields
  }
);

export const User = mongoose.model("users", userSchema);
