const express = require("express");
const mongobd = require("mongodb");
const DbUrl = "mongodb+srv://admin:admin@cluster0-zjobv.mongodb.net";

const router = express.Router();

router.get("/", async (req, res) => {
  const MongoClient = mongobd.MongoClient;
  const client = new MongoClient(DbUrl, { useNewUrlParser: true });

  await client.connect(async err => {
    const dates = client.db("boboapp").collection("dates");

    const ff = await dates
      .aggregate([
        {
          $lookup: {
            from: "feedings",
            localField: "_id",
            foreignField: "dateId",
            as: "feedings"
          }
        }
      ])
      .toArray();

    client.close();
    res.send(ff);
  });

  // try {
  //   const data = await loadDataFromDB();
  //   res.status(200).send(await data.find({}).toArray());
  // } catch (err) {
  //   console.log(err);
  // }
});

router.post("/", async (req, res) => {
  const payload = req.body;
  const MongoClient = mongobd.MongoClient;
  const client = new MongoClient(DbUrl, { useNewUrlParser: true });

  const date = payload.date;
  const feeding = {
    hour: payload.hour,
    description: payload.description,
    amount: payload.amount
  };

  if (date && feeding) {
    await client.connect(async err => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }

      const dates = client.db("boboapp").collection("dates");
      const feedings = client.db("boboapp").collection("feedings");
      let today = await dates.findOne({ date: date });

      if (!today) {
        today = {
          date
        };
        await dates.insertOne(today);
      }

      feeding.dateId = today._id;
      await feedings.insertOne(feeding);

      client.close();
      return res.status(201).send();
    });
  }
});

module.exports = router;
