const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
  res.send({
    success: true,
    data: "Welcome to the Events API!",
  });
});

module.exports = router;
