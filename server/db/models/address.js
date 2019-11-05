const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('address', {
  line_1: {
    type: Sequelize.STRING
  },
  line_2: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.STRING
  }
})

module.exports = Address
