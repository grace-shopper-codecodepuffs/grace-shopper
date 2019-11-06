const {User, Potion, Order, Address} = require('../models')

User.prototype.addToCart = function(potion, quantity = 1) {
  const myCart = this.getCart()
  myCart.addPotion(potion, {through: {quantity: quantity}})
}
