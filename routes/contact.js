const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../','views', 'contactus.html'));
});

router.post('/submit', (req, res) => {
    res.redirect('/success');
});


module.exports = router;
