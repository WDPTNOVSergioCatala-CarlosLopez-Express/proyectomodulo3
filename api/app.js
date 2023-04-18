require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const createError = require("http-errors");


//Load Configuration
require('./config/db.config')
const app = express();

app.use(express.json());
app.use(logger("dev"));

const api = require('./config/routes.config')
app.use('/api/v1', api)







const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Application is running at port ${port}`));