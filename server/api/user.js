const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/:userId/cart', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const user = await User.findByPk(userId)
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
    console.log('req.body>>>>', potion)
    const user = await User.findByPk(userId)
    // console.log('user is>>>>', user)
    user.addToCart(potion.id, 3)
    // console.log('updatedCart after addToCart()>>>>', user.getCart())
    res.json(user.getCart())
  } catch (err) {
    console.error(err)
  }
})
