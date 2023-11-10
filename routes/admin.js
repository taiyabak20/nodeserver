const express = require('express')

const router = express.Router()

router.get('/add-product',(req, res, next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name = "title" placeholder="title"><input type="text" name = "size" placeholder="size"><input type = "submit"></form>')
    
})

router.post('/add-product',(req, res, next)=>{
    console.log(req.body)
    res.redirect('/shop');

})

module.exports = router; 