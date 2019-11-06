const Sequelize = require('sequelize')
const db = require('../db')

const OrdersPotions = db.define('ordersPotions', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 0
    }
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0
    }
  }
})

OrdersPotions.beforeUpdate(orderPotion => {
  if (orderPotion.quantity === 0) orderPotion.destroy()
})

module.exports = OrdersPotions
