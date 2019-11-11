const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/:userId/cart', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const user = await User.findByPk(userId)
    const cart = await user.getPotionsInCart()
    res.json(cart)
  } catch (err) {
    console.error(err)
    next(err)
  }
})

router.post('/:userId/cart', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const {product, quantity} = req.body
    const user = await User.findByPk(userId)
    await user.addToCart(product, quantity)
    res.json(await user.getPotionsInCart())
  } catch (err) {
    console.error(err)
    next(err)
  }
})
