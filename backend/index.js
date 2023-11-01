// app.js

// Require the Express module
import express from "express";
import { config } from "dotenv";
import { connectDB } from "./database/db.js";
import userRouter from "./routes/user.js";

const app = express();
config({
  path: "./database/config.env",
});
app.use(express.json());
connectDB();
// Define a route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.use("/api/v1/users", userRouter);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port, ${port}`);
});
