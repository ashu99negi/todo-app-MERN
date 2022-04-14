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

  let data=request.body.formData
  mongoClient.connect(url, (err, client) => {
    const db = client.db("TodoTasks");
    db.collection("tasks").insertOne(
      { title: data.title, body: data.body,date:data.date },
      (errorOne, result) => {
        console.log(errorOne, result);
        client.close();
        response.status(200).json({ message: "data send " });
      }
    );
  });
});
app.delete("/:id", (request, response) => {
  console.log(request.params.id);
  // let d=request.params.id
  mongoClient.connect(url, (err, client) => {
    const db = client.db("TodoTasks");
    db.collection("tasks").deleteOne({'_id': new mongodb.ObjectId(request.params.id)})
    .then((errorOne, result) => {
      console.log("afadsfasf======",errorOne, result);
      client.close();
      response.status(200).json({ message: "data deleted successfully" });
    })
  });
});
// db.collectionName.remove( {"_id": ObjectId(request.params.id)})
app.listen(8000);

