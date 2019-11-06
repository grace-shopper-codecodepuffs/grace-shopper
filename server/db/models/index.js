const User = require('./user')
const Potion = require('./potions')
const Order = require('./order')
const Address = require('./address')
const OrdersPotions = require('./ordersPotions')

//User will have a cartId and pastOrderId(multiple?) Ids for past orders
//Will have setCart/getCart methods
//Will have addPastOrder//getPastOrders
User.belongsToMany(Order, {
  as: 'pastOrder',
  through: 'usersOrders',
  foreignKey: 'userId',
  otherKey: 'orderId'
})
User.belongsTo(Order, {as: 'cart'}) //only can have one cart
Order.hasOne(User) //order should not be connected to more than one user

//Order will have many potions, and will have quantity on order on the through table
// Order will have addPotion, getPotions, removePotion, etc.
Order.belongsToMany(Potion, {
  through: OrdersPotions,
  foreignKey: 'orderId',
  otherKey: 'potionId'
})
Potion.hasMany(Order)

Order.belongsTo(Address, {as: 'shippingAddress'})
Order.belongsTo(Address, {as: 'billingAddress'})

User.belongsToMany(Address, {
  through: 'userAddress',
  foreignKey: 'userId',
  otherKey: 'addressId'
})

User.afterCreate(user => {
  user.setCart(Order.create({}))
})

module.exports = {
  User,
  Potion,
  Address,
  Order
}
