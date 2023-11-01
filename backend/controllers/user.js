import { User } from "../model/userModel.js";

export const register = async (req, res, next) => {
  try {
    console.log("Register API Called:");
    const { name, email, number, password } = req.body;

    console.log(name, email, password);
    if (!email || !password || !number || !name) {
      return res.status(400).json({
        message: "Please provide email,password,phoneNumber",
      });
    }
    // check if that email user already exist or not
    const userFound = await User.find({ userEmail: email });
    if (userFound.length > 0) {
      return res.status(400).json({
        message: "User with that email already registered",
      });
    }
    // else
    await User.create({
      userName: name,
      userPhoneNumber: number,
      userEmail: email,
      userPassword: password,
    });

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    next(error);
  }
};
