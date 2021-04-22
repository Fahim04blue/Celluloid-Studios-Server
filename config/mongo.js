require("dotenv").config();
const mongoose = require("mongoose");

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.error("DB Connection Failure");
    process.exit(1);
  }
};
module.exports = connectMongo;
