const express = require("express");
const validateName = require("./middlewares/middlewareName");
const validationPrice = require("./middlewares/middlewarePrice");
const validationDesc = require("./middlewares/middlewareDesc");
const validationCreated = require("./middlewares/middlewareCreated");
const validationRating = require("./middlewares/middlewareRating");
const validationDifficulty = require("./middlewares/middlewareDifficulty");
const auth = require("./middlewares/auth");
const generateToken = require("./files/generateToken");

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
  auth,
  (req, res) => {
    res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
  }
);

app.post('/signup', (_req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = app;
