const connectDB = require("./db/connect");
const User = require("./models/User");

const jsonData = require("./jsondata.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Detail.deleteMany();
    await Detail.create(jsonData);
    console.log("Success!!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
