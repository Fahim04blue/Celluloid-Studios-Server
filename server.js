const express = require("express");
const ObjectId = require("mongodb").ObjectId;
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("dotenv").config();

const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const servicesCollection = client.db("celluloidDB").collection("services");
  const ordersCollection = client.db("celluloidDB").collection("orders");
  const reviewsCollection = client.db("celluloidDB").collection("review");
  const adminCollection = client.db("celluloidDB").collection("admin");

  // perform actions on the collection object
  console.log("DB Connected");

  app.post("/addService", (req, res) => {
    const service = req.body;
    console.log("adding service", service);
    servicesCollection.insertOne(service).then((result) => {
      console.log(result.insertedCount);
      res.send({ count: result.insertedCount });
    });
  });
  app.get("/services", (req, res) => {
    servicesCollection.find({}).toArray((err, service) => {
      res.send(service);
    });
  });
  app.get("/service/:id", (req, res) => {
    servicesCollection
      .find({ _id: ObjectId(req.params.id) })
      .toArray((err, service) => {
        res.send(service[0]);
      });
  });
  app.delete("/delete/:id", (req, res) => {
    servicesCollection
      .deleteOne({ _id: ObjectId(req.params.id) })
      .then((result) => {
        res.send(result.deletedCount > 0);
      });
  });
  app.post("/addOrder", (req, res) => {
    const newOrder = req.body;
    console.log("Order", newOrder);
    ordersCollection.insertOne(newOrder).then((result) => {
      console.log(result.insertedCount);
      res.send({ count: result.insertedCount });
    });
  });
  app.get("/orders", (req, res) => {
    ordersCollection.find({ email: req.query.email }).toArray((err, orders) => {
      res.send(orders);
    });
  });
  app.get("/allOrders", (req, res) => {
    ordersCollection.find({}).toArray((err, allOrders) => {
      res.send(allOrders);
    });
  });
  app.patch("/updateDone/:id", (req, res) => {
    ordersCollection
      .updateOne({ _id: ObjectId(req.params.id) }, { $set: { status: "Done" } })
      .then((result) => {
        res.send({ count: result.modifiedCount });
      });
  });
  app.patch("/updateOnGoing/:id", (req, res) => {
    ordersCollection
      .updateOne(
        { _id: ObjectId(req.params.id) },
        { $set: { status: "On Going" } }
      )
      .then((result) => {
        res.send({ count: result.modifiedCount });
      });
  });
  app.patch("/updatePending/:id", (req, res) => {
    ordersCollection
      .updateOne(
        { _id: ObjectId(req.params.id) },
        { $set: { status: "Pending" } }
      )
      .then((result) => {
        res.send({ count: result.modifiedCount });
      });
  });
  app.post("/addReview", (req, res) => {
    const newReview = req.body;
    console.log("Review", newReview);
    reviewsCollection.insertOne(newReview).then((result) => {
      console.log(result.insertedCount);
      res.send({ count: result.insertedCount });
    });
  });
  app.get("/reviews", (req, res) => {
    reviewsCollection.find({}).toArray((err, reviews) => {
      res.send(reviews);
    });
  });
  app.post("/addAdmin", (req, res) => {
    const newAdmin = req.body;
    adminCollection.insertOne(newAdmin).then((result) => {
      console.log(result.insertedCount);
      res.send({ count: result.insertedCount });
    });
  });
  app.post("/isAdmin", (req, res) => {
    const email = req.body.email;
    console.log(email);
    adminCollection.find({ email: email }).toArray((err, admin) => {
      res.send(admin.length > 0);
    });
  });

  app.get("/", (req, res) => {
    res.send("Welcome");
  });
});
app.listen(process.env.PORT || 5000, () => {
  console.log("Listening to Port 5000");
});
