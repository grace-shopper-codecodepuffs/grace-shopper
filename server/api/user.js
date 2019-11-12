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
    const user = User.findByPk(req.user.id)
    const cartId = user.getCart().id
    const potionId = req.params.potionId
    const orderPotionInstance = OrdersPotions.findOne({
      where: {
        orderId: cartId,
        potionId: potionId
      }
    })
    orderPotionInstance.update(req.body)
    res.send(user.getPotionsInCart())
  } catch (err) {
    console.error(err)
    next(err)
  }
})
