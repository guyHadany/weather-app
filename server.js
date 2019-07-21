const express = require('express') //install
const app = express()
const api = require( './server/routes/api' )  // check the path
const path = require('path')
const bodyParser = require('body-parser') //install
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/weather', { useNewUrlParser: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist'))) 
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use('/', api)


const port = 5000
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
