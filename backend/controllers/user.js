import { User } from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    const hasedPassword = await bcrypt.hash(password, 10);
    await User.create({
      userName: name,
      userPhoneNumber: number,
      userEmail: email,
      userPassword: hasedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Please provide email,password",
    });
  }

  // check if that email user exists or not
  const userFound = await User.find({ userEmail: email });
  if (userFound.length == 0) {
    return res.status(404).json({
      message: "User with that email is not Registered",
    });
  }

  // password check
  const isMatched = bcrypt.compareSync(password, userFound[0].userPassword);
  if (isMatched) {
    // generate token
    const token = jwt.sign({ id: userFound[0]._id }, "testkey", {
      expiresIn: "30d",
    });

    res.status(200).json({
      message: "User logged in successfully",
      token,
    });
  } else {
    res.status(404).json({
      message: "Invalid Password",
    });
  }
};
