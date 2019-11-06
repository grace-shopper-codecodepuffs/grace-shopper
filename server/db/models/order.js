const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  isCart: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: true
  },
  orderDate: {
    type: Sequelize.DATE,
    allowNull: true
  }
})

module.exports = Order
