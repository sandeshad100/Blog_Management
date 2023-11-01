// app.js

// Require the Express module
import express from "express";
import userRouter from "./routes/user.js";

const app = express();
app.use(express.json());
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
