const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

//make sure to send user ID in req.body
router.get('/', async (req, res, next) => {
  try {
    const user = await User.findByPk(1)
    //^^later change 1 to req.body.id
    const potions = await user.getPotionsInCart()
    res.json(potions)
  } catch (err) {
    next(err)
  }
})
