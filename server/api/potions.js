const router = require('express').Router()
const {Potion} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const potions = await Potion.findAll()
    // console.log('potions', potions)
    if (!potions) {
      res.status(404).send('What happened to all the potions? :(')
    } else res.send(potions)
  } catch (error) {
    next(error)
  }
})
