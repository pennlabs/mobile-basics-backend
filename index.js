const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

app.get('/api', (req, res) => {
  res.send("Welcome to the API!");
});

app.listen(process.env.PORT, err => {
  if (err) {
    console.error(err);
  }

  console.log('Listening on port ' + process.env.PORT);
})