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

      it("returns Cody's cart", async () => {
        console.log('CODY CARTTTTT', await cody.getCart())
        expect(await cody.getCart().order.dataValues.userId).to.be.equal(
          cody.id
        )
      })
      it("cody's cart should be labeled a cart", () => {
        expect(cody.getCart().isCart).to.be.equal(true)
      })
      it("should include the potionId as null initially because it's empty", () => {
        expect(cody.getCart().potionId).to.be.equal(null)
      })
    })
  })
})
