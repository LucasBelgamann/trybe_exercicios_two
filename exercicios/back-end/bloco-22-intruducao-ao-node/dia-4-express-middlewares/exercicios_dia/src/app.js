const express = require("express");
const validateName = require("./middlewares/middlewareName");
const validationPrice = require("./middlewares/middlewarePrice");
const validationDesc = require("./middlewares/middlewareDesc");
const validationCreated = require("./middlewares/middlewareCreated");
const validationRating = require("./middlewares/middlewareRating");
const validationDifficulty = require("./middlewares/middlewareDifficulty");

const app = express();
app.use(express.json());

app.post(
  "/activities",
  validateName,
  validationPrice,
  validationDesc,
  validationCreated,
  validationRating,
  validationDifficulty,
  (req, res) => {
    res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
  }
);

module.exports = app;
