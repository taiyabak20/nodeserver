const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/success', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../','views', 'success.html'));
});


// /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   console.log(req.body);
//   res.redirect('/sucess.html');
// });

module.exports = router;
