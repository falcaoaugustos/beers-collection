const express = require('express')
const app = express()
const beers = require('./beers-route')

app.get('/', (req, res) => {
  res.send('Welcome to beers collection!')
})

app.use('/beers', beers)

module.exports = app