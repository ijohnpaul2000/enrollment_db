const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const db = require("./models");

const studentRouter = require("./routes/Student");
app.use("/student", studentRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server is running");
  });
});
