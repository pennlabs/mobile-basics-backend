const express = require('express');
const body_parser = require('body-parser');
const env = require('dotenv');
const homepage_routes = require('./routes/homepage');
const facts_routes = require('./routes/facts');
const events_routes = require('./routes/events');
const app = express();
env.config();

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

app.get('/api', (req, res) => {
  res.send("Welcome to the Labs API!");
});

app.use('/api/homepage', homepage_routes);
app.use('/api/facts', facts_routes);
app.use('/api/events', events_routes);

app.listen(process.env.PORT, err => {
  console.log('Listening on port ' + process.env.PORT);
});