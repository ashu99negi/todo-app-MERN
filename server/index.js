const express = require("express");
const mongoClient = require("mongodb").MongoClient;
const mongodb = require("mongodb");
const url = "mongodb+srv://adarsh:warning@cluster0.6zuqm.mongodb.net/ritik";

const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get("/", (req, res) => {
  mongoClient.connect(url, (err, client) => {
    const db = client.db("TodoTasks");
    const tasks = db
      .collection("tasks")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.status(200).json({ message: result });
      });
    data = tasks;
    console.log(tasks);
  });
});

app.post("/", (request, response) => {
  let data = request.body.formData;
  mongoClient.connect(url, (err, client) => {
    const db = client.db("TodoTasks");
    db.collection("tasks").insertOne(
      { title: data.title, body: data.body, date: data.date },
      (errorOne, result) => {
        console.log(errorOne, result);
        client.close();
        response.status(200).json({ message: "data send " });
      }
    );
  });
});
app.delete("/:id", (request, response) => {
  mongoClient.connect(url, (err, client) => {
    const db = client.db("TodoTasks");
    db.collection("tasks")
      .deleteOne({ _id: new mongodb.ObjectId(request.params.id) })
      .then((errorOne, result) => {
        console.log("Delete ==> ", errorOne, result);
        client.close();
        response.status(200).json({ message: "data deleted successfully" });
      });
  });
});

// put request(to update data)
app.put("/:id", (request, response) => {
  const id = request.params.id;
  const title = request.body.title;
  const body = request.body.body;
  const date = request.body.date;

  console.log(
    "Received Id" +
      id +
      "Received Title = " +
      title +
      " Received Body= " +
      body +
      " Received Date= " +
      date
  );
  mongoClient.connect(url, (err, client) => {
    const db = client.db("TodoTasks");
    db.collection("tasks")
      .updateOne(
        { _id: new mongodb.ObjectId(id) },
        { $set: { title: title, body: body, date: date } }
      )
      .then((errorOne, result) => {
        console.log("Updated ==> ", errorOne, result);
        client.close();
        response.status(200).json({ message: "data was updated successfully" });
      });
  });
});
app.listen(8000);
