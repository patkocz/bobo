const express = require("express");
const mongobd = require("mongodb");
const ObjectId = require("mongodb").ObjectID;
const { DbUrl, DbName } = require("../../config")[process.env.NODE_ENV];

const router = express.Router();

router.post("/", async (req, res) => {
  const payload = req.body;
  const MongoClient = mongobd.MongoClient;
  const client = new MongoClient(DbUrl, { useNewUrlParser: true });
});
