const express = require("express");
const router = express.Router();
const { Students } = require("../models");

router.post("/", async (req, res) => {
  const student = req.body;

  await Students.create(student);
  res.json(student);
});

router.get("/", async (req, res) => {
  const listofStudents = await Students.findAll();
  res.send(listofStudents);
});

module.exports = router;
