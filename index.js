const express = require('express');
const body_parser = require('body-parser');
const env = require('dotenv');
const homepage_routes = require('./routes/homepage');
const facts_routes = require('./routes/facts');
const events_routes = require('./routes/events');
const app = express();

env.config();

const PORT = process.env.PORT || 3000;

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

app.get('/api', (req, res) => {
  res.send({
    success: true,
    data: "Welcome to the Labs API!",
  });
});

app.use('/api/homepage', homepage_routes);
app.use('/api/facts', facts_routes);
app.use('/api/events', events_routes);

app.listen(PORT, err => {
  console.log('Listening on port ' + PORT);
});
