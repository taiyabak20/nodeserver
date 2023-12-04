const express = require('express')
const router = express.Router()
const contactControllers = require('../controllers/contact')

router.get('/contactUs',contactControllers.contact)

router.post('/submit',contactControllers.submit)

module.exports= router;