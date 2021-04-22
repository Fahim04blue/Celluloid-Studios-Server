const express = require("express");
// const ObjectId = require("mongodb").ObjectId;
const cors = require("cors");
const connectMongo = require("./config/mongo");
const serviceRoutes = require("./routes/serviceRoutes");
const orderRoutes = require("./routes/orderRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const adminRoutes = require("./routes/adminRoutes");
connectMongo();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("dotenv").config();

app.use("/services", serviceRoutes);
app.use("/orders", orderRoutes);
app.use("/review", reviewRoutes);
app.use("/admin", adminRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening to Port 5000");
});
