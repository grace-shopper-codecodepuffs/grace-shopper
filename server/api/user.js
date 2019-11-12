const router = require('express').Router()
const {User, Potion} = require('../db/models')
module.exports = router

router.get('/cart', async (req, res, next) => {
  try {
    const userId = req.user.id
    const user = await User.findByPk(userId)
    const cart = await user.getPotionsInCart()
    res.json(cart)
  } catch (err) {
    console.error(err)
    next(err)
  }
})

router.post('/cart', async (req, res, next) => {
  try {
    const userId = req.user.id
    const {product, quantity} = req.body
    const user = await User.findByPk(userId)
    await user.addToCart(product, quantity)
    res.json(await user.getPotionsInCart())
  } catch (err) {
    console.error(err)
    next(err)
  }
})

router.delete('/cart/:potionId', async (req, res, next) => {
  try {
    const userId = req.user.id
    const user = await User.findByPk(userId)
    const potion = await Potion.findByPk(req.params.potionId)
    await user.removeFromCart(potion)
    res.json(await user.getPotionsInCart())
  } catch (err) {
    console.error(err)
    next(err)
  }
})

router.put('/cart/:potionId', async (req, res, next) => {
  try {
    const userId = req.user.id
    const user = await User.findByPk(userId)
    const potion = await Potion.findByPk(req.params.potionId)
  } catch (err) {
    console.error(err)
    next(err)
  }
})
