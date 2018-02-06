const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
  res.send("Welcome to the Homepage API!");
});

module.exports = router;