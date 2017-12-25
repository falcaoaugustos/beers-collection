const express = require('express')
const app = express()

const beers = require('./beers-route')

app.use('/beers', beers)

module.exports = app