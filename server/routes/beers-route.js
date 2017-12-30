const express = require('express')
const router = express.Router()

const beers = require('../models/beers-model')

router.get('/', (req, res) => {
  res.json(beers)
})

router.get('/:id', (req, res) => {
  const beer = beers[req.params.id]
  res.json(beer)
})

module.exports = router