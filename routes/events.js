const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
  res.send("Welcome to the Events API!");
});

module.exports = router;