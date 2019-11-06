const router = require('express').Router()
const {Potion} = require('../db/models')
module.exports = router

router.get('/:potionId', async (req, res, next) => {
  try {
    const potion = await Potion.findByPk(req.params.potionId)
    if (!potion) {
      res.status(404).send('This potion does not exist...yet!')
    } else res.send(potion)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const potions = await Potion.findAll()
    if (!potions) {
      res.status(404).send('What happened to all the potions? :(')
    } else res.send(potions)
  } catch (error) {
    next(error)
  }
})
