const express = require( 'express' ) //install
const router = express.Router()
const request = require('request') //install
const City = require('../model/City.js')




//in the end
router.get('/city/:cityName', function (req, resp) {
    let city = req.params.cityName
    request.get(`http://api.apixu.com/v1/current.json?key=c9fcf2ea07f14c5e81a132201191707&q=${city}`, function(err, res, body){
    let data = JSON.parse(body)
    data = {
        name: data.location.name, 
        updatedAt: data.current.last_updated, 
        temperature: data.current.temp_c, 
        condition: data.current.condition.text, 
        conditionPic: data.current.condition.icon,
        isSaved: false
    }
  
    resp.send(data)
    }) 
})

router.get('/cities', function(req,res){
    City.find({}).exec(function(err, data){
        
        res.send(data)
    })
})

router.post('/city', function(req, res){
    let data = req.body
    let city = new City(data)
    city.save()
})

router.delete('/city/:cityName', function(req, res){
    let name = req.params.cityName
    City.findOneAndRemove({name: name}).exec(function(err, city){
        res.send(name)
    })
})

module.exports = router