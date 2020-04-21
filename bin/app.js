const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const compression = require('compression')
const app = express();

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(compression())

app.use(cors());

module.exports = app
