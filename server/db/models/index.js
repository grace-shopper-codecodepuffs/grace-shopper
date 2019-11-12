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

User.prototype.addToCart = async function(potion, quantity) {
  try {
    const cart = await this.getCart()
    const gotPotion = await Potion.findByPk(potion.id)
    await cart.addPotion(gotPotion, {
      through: {price: gotPotion.price, quantity: quantity}
    })
  } catch (err) {
    console.error(err)
  }
}

User.prototype.removeFromCart = async function(potion) {
  try {
    const cart = await this.getCart()
    const gotPotion = await Potion.findByPk(potion.id)
    await cart.removePotion(gotPotion)
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

User.prototype.checkout = async function({
  firstName,
  lastName,
  shipping,
  billing
}) {
  try {
    //update user first/last names
    this.update({
      firstName: firstName,
      lastName: lastName
    })
    //get the cart we want
    const cart = this.getCart() //we have the cart at the user that has been updated
    //declare shipping/billing address (find or create)
    const shippingAddress = Address.findOrCreate(shipping)
    const billingAddress = Address.findOrCreate(billing)
    //update the shipping/biling addresses for the order
    cart.setShippingAdress = shippingAddress
    cart.setBillingAddress = billingAddress
    //update the cart so it isn't a cart and theres a shipping date
    cart.update({
      isCart: false,
      orderDate: new Date()
    })
    //initialize a new empty cart for user
    Order.create({
      userId: this.id
    })
  } catch (error) {
    console.error(error)
  }
}

//update new stock quantity

//Order will have many potions, and will have quantity on order on the through table
// Order will have addPotion, getPotions, removePotion, etc.
Order.belongsToMany(Potion, {
  through: OrdersPotions
})
Potion.belongsToMany(Order, {
  through: OrdersPotions
})

Order.belongsTo(Address, {as: 'shippingAddress'})
Order.belongsTo(Address, {as: 'billingAddress'})

module.exports = {
  User,
  Potion,
  Address,
  Order,
  OrdersPotions
}
