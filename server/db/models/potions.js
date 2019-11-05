const Sequelize = require('sequelize')
const db = require('../db')

const Potion = db.define('potion', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  picture: {
    type: Sequelize.STRING,
    default:
      'https://vignette.wikia.nocookie.net/tlos-huggers/images/f/fe/Images.jpeg/revision/latest?cb=20190325152050',
    allowNull: false
  }
})

module.exports = Potion

/**
 * instanceMethods
 */
Potion.prototype.isInStock = function() {
  return this.quantity > 0
}

Potion.prototype.buySome = function(qty) {
  if (this.quantity >= qty) {
    this.quantity = this.quantity - qty
  } else {
    return 'Not enough of requested potion in stock. Please check back later!'
  }
}
