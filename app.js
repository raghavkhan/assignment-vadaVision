require("dotenv").config();
const connectDB = require("./db/connect");


const User = require("./model/User")

const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.get("/", async (req, res) => {
    const users = await User.
  res.status(200).json("hell from server");
});

const start = async () => {
  await connectDB(process.env.MONGO_URL);
  console.log("db connected !");
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
};

start();
