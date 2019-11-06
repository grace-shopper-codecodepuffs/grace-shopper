const {expect} = require('chai')
const db = require('../index')
const {User, Order, Address} = require('../models')
// const { } = db.model('user')

describe('index', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('User Prototype Methods', () => {
    describe('getCart', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          email: 'cody@puppybook.com',
          password: 'bones',
          firstName: 'Cody',
          lastName: 'Pugster'
        })
      })

      it("returns Cody's cart, initially empty", async () => {
        const cart = await cody.getCart()
        expect(cart.userId).to.be.equal(cody.id)
        expect(cart.isCart).to.be.equal(true)
        expect(cart.potionId).to.be.equal(null)
      })
    })
  })
})
