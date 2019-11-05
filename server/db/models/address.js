const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('address', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  line_1: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmpty: false
    }
  },
  line_2: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmpty: false
    }
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmpty: false
    }
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmpty: false
    }
  }
})

module.exports = Address
