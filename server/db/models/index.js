const User = require('./user')
const Potion = require('./potions')
const Order = require('./order')
const Address = require('./address')
const OrdersPotions = require('./ordersPotions')

Order.belongsTo(User) //order belongs to one user with userId
User.hasMany(Order) //user can have many orders one of which is cart

User.afterCreate(user => {
  //create the User's cart
  Order.create({
    userId: user.id
  })
})

User.prototype.getCart = async function() {
  try {
    const cart = await Order.findOne({
      where: {
        isCart: true,
        userId: this.id
      }
    })
    return cart
  } catch (error) {
    console.error(error)
  }
}

User.prototype.addToCart = async function(potionId, quantity) {
  try {
    const cart = await this.getCart()
    const potion = await Potion.findByPk(potionId)
    await cart.addPotion(potion, {
      through: {price: potion.price, quantity: quantity}
    })
  } catch (err) {
    console.error(err)
  }
}

User.prototype.removeFromCart = async function(potion) {
  try {
    const cart = await this.getCart()
    await cart.removePotion(potion)
  } catch (err) {
    console.error(err)
  }
}

User.prototype.editPotionCartQuantity = async function(potion, newQuantity) {
  try {
    const cart = await this.getCart()
    const potionToUpdate = await OrdersPotions.findOne({
      where: {
        orderId: cart.id,
        potionId: potion.id
      }
    })

    await potionToUpdate.update({
      quantity: newQuantity
    })
  } catch (err) {
    console.error(err)
  }
}

User.prototype.getPotionsInCart = async function() {
  try {
    const cart = await this.getCart()
    const allPotions = await OrdersPotions.findAll({
      where: {
        orderId: cart.id
      }
    })
    return allPotions
  } catch (err) {
    console.error(err)
  }
}

User.prototype.getCartTotal = async function() {
  try {
    const allPotionsInCart = await this.getPotionsInCart()

    const total = allPotionsInCart.reduce((accum, potion) => {
      const currPotion = potion.dataValues.quantity * potion.dataValues.price
      return accum + currPotion
    }, 0)
    return Math.round(total * 100) / 100
  } catch (err) {
    console.error(err)
  }
}

//Order will have many potions, and will have quantity on order on the through table
// Order will have addPotion, getPotions, removePotion, etc.
Order.belongsToMany(Potion, {
  through: OrdersPotions
})
Potion.belongsToMany(Order, {
  through: OrdersPotions
})

User.belongsTo(Address, {as: 'shippingAddress'})
User.belongsTo(Address, {as: 'billingAddress'})

module.exports = {
  User,
  Potion,
  Address,
  Order,
  OrdersPotions
}
