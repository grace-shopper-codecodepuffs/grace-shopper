const router = require('express').Router()
const {User, Potion} = require('../db/models')
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

router.delete('/:userId/cart/:potionId', async (req, res, next) => {
  console.log('req.body>>>', req.body)
  try {
    const user = await User.findByPk(req.params.userId)
    const potion = await Potion.findByPk(req.params.potionId)
    await user.removeFromCart(potion)
    res.json(await user.getPotionsInCart())
  } catch (err) {
    console.error(err)
    next(err)
  }
})
