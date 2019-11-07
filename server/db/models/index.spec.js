const {expect} = require('chai')
const db = require('../index')
const {User, Order, Address, Potion} = require('../models')
// const { } = db.model('user')

describe('index', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  let cody
  let potion
  beforeEach(() => {
    cody = User.build({
      email: 'cody@puppybook.com',
      password: 'bones',
      firstName: 'Cody',
      lastName: 'Pugster'
    })
    potion = Potion.build({
      name: 'eight hours',
      description:
        'eight hours of sleep in a bottle. Stay up all night studying? Drink eight hours, to feel refreshed, as if you had gotten a full night of sleep. WARNING: SHOULD NOT BE USED MORE THAN TWO DAYS IN A ROW. SIDE EFFECTS ARE LITERALLY BRAIN MELTING.',
      quantity: 50,
      price: 29.99
    })
  })

  describe('User Prototype Methods', () => {
    describe('getCart', async () => {
      const codySaved = await cody.save()

      it("returns Cody's cart, initially empty", async () => {
        const cart = await codySaved.getCart()
        expect(cart.userId).to.be.equal(cody.id)
        expect(cart.isCart).to.be.equal(true)
        expect(cart.potionId).to.be.equal(null)
      })
    })

    describe('addToCart', async () => {
      let cody
      beforeEach(async () => {
        cody = await User.create({
          email: 'cody@puppybook.com',
          password: 'bones',
          firstName: 'Cody',
          lastName: 'Pugster'
        })
      })
    })
  })
})
