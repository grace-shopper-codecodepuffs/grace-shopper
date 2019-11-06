const User = require('./user')
const Potion = require('./potions')
const Order = require('./order')
const Address = require('./address')
const OrdersPotions = require('./ordersPotions')

Order.belongsTo(User) //order belongs to one user with userId
User.hasMany(Order) //user can have many orders one of which is cart

User.afterCreate(user => {
  const cart = Order.create({
    userId: user.id
  })
})

// User.prototype.getCart = async function() {
//   try {
//     const cart = await Order.findOne({
//       where: {
//         isCart: true,
//         userId: this.id
//       }
//     })
//     // console.log('CART',cart)
//     return cart
//   } catch (error) {
//     console.error(error)
//   }

// }

//Order will have many potions, and will have quantity on order on the through table
// Order will have addPotion, getPotions, removePotion, etc.
Order.belongsToMany(Potion, {
  through: OrdersPotions,
  foreignKey: 'orderId',
  otherKey: 'potionId'
})
Potion.hasMany(Order)

User.belongsTo(Address, {as: 'shippingAddress'})
User.belongsTo(Address, {as: 'billingAddress'})

module.exports = {
  User,
  Potion,
  Address,
  Order
}
