const express = require('express');
const router = new express.Router();
const fs = require('fs');

// Read cell options from JSON file
let cellOptions = [];
fs.readFile("cell_options.json", (err, data) => {
  // TODO error handle better
  if (err) {
    console.log('Error collecting data from JSON file.');
  } else {
    cellOptions = JSON.parse(data).options;
  }
});

router.get('/', (req, res) => {
  cells = [];
  cellOptions.forEach((option) => {
      cells.push({type: option});
  });
  res.send({
    success: true,
    data: {
      cells,
    },
  });

  // TODO implement so that user can change order of cells being displayed
  router.post('/', (req, res) => {
    res.send({
      success: false,
      error: 'Not implemented yet.',
    });
  });

});

module.exports = router;
