const router = require('express').Router()
const {User, Potion, OrdersPotions} = require('../db/models')
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

router.post('/checkout', async (req, res, next) => {
  try {
    const userId = req.user.id //establishes the user that will checkout
    const checkoutFormInfo = req.body
    const user = await User.findByPk(userId) //finds the user information
    await user.checkout(checkoutFormInfo)
  } catch (error) {
    console.error(error)
    next(error)
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

//edit qt of order in cart
router.put('/cart/:potionId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id)
    const cart = await user.getCart()
    const potionId = req.params.potionId
    const orderPotionInstance = await OrdersPotions.findOne({
      where: {
        orderId: cart.id,
        potionId: potionId
      }
    })
    await orderPotionInstance.update(req.body)
    res.send(await user.getPotionsInCart())
  } catch (err) {
    console.error(err)
    next(err)
  }
})
