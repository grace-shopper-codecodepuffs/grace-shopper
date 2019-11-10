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
  }
})

router.post('/:userId/cart', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const potion = req.body
    // console.log('req.body>>>>', potion)
    const user = await User.findByPk(userId)
    // console.log('user is>>>>', user)
    user.addToCart(potion.id, 3)
    await user.getPotionsInCart()
    // console.log('updatedCart after addToCart()>>>>', user.getCart())
    res.json(user.getPotionsInCart())
  } catch (err) {
    console.error(err)
  }
})
