const express = require('express')
const routes = express.Router()
const multer = require('./App/middlewares/multer')


// Home
routes.get('/', function(req, res){
    return res.render('./home/index')
})

// Tattoo Schedule

routes.get('/tattoo', function (req, res) {
    return res.render('./tattoo/tattooSchedule.njk')
})


module.exports = routes