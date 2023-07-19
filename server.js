const express = require('express');
const cors = require("cors");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const axios = require('axios');

const PORT = process.env.PORT || 8080
const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://lyncare:fls2022@lyncare.5ip2vsa.mongodb.net/kimamplifiers?retryWrites=true&w=majority'

app.use(cors({
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/build')));

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.use('/api', require('./app/routes/index'));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});