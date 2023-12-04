const express = require('express');
const contactControllers = require('../controllers/contact')
const router = express.Router();

router.get('/success',contactControllers.success)

module.exports = router;