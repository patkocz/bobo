const express = require("express");
const mongobd = require("mongodb");

const fakeData = require("../../data/fakeData");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send(fakeData);
});

router.post("/", (req, res) => {
  const payload = req.body;

  if (payload) {
    fakeData.push(payload);
    res.status(201).send();
  }

  res.status(400).send();
});

async function loadDataFromDB() {
  const client = await mongobd.MongoClient.connect(
    "mongodb://CONNECTION_STRING",
    {
      useNewUrlParser: true
    }
  );

  return client.db("boboEats").collection("feedings");
}

module.exports = router;
