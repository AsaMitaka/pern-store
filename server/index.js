const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./db');
const models = require('./models/models');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`listening on port : ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
