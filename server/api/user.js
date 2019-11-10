const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/:userId/cart', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const user = await User.findByPk(userId)
    console.log('user is', user)
    const cart = user.getCart()
    res.json(cart)
  } catch (err) {
    console.error(err)
  }
})

router.post('/:userId/cart', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const potion = req.body
    const user = await User.findByPk(userId)
    console.log('user is', user)
    const cart = user.addToCart()
    res.json(cart)
  } catch (err) {
    console.error(err)
  }
})
