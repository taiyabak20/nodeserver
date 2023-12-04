const path = require('path')

exports.contact = (req, res)=>{
    res.sendFile(path.join(__dirname,'..', 'views', 'contactUs.html'))
}
exports.submit = (req,res)=>{
    res.redirect('/success')
    }
exports.success = (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'success.html'))
}