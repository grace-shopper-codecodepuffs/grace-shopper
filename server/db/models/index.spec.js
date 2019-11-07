const {expect} = require('chai')
const db = require('../index')
const {User, Order, Address, Potion} = require('../models')
// const { } = db.model('user')

describe('index', () => {
  before(() => {
    return db.sync({force: true})
  })

  afterEach(() => {
    return db.sync({force: true})
  })

  describe('User Prototype Methods', () => {
    let cody
    let potion
    beforeEach(() => {
      cody = User.create({
        email: 'marley@badtothebone.com',
        password: 'treatsforlife',
        firstName: 'Marley',
        lastName: 'Teag'
      })
      potion = Potion.create({
        name: 'eight hours',
        description:
          'eight hours of sleep in a bottle. Stay up all night studying? Drink eight hours, to feel refreshed, as if you had gotten a full night of sleep. WARNING: SHOULD NOT BE USED MORE THAN TWO DAYS IN A ROW. SIDE EFFECTS ARE LITERALLY BRAIN MELTING.',
        quantity: 50,
        price: 29.99
      })
    })
    // describe('getCart', async () => {

    //   it("returns Cody's cart, initially empty", async () => {
    //     const codySaved = await cody.save()

    //     let cart = await codySaved.getCart()
    //     cart = cart.dataValues
    //     expect(cart.userId).to.be.equal(cody.id)
    //     expect(cart.isCart).to.be.equal(true)
    //     expect(cart.potionId).to.be.equal(null)
    //   })
    // })

    describe('addToCart', async () => {
      it('adds a potion to users cart', async () => {
        const codySaved = await cody.save()

        const potionSaved = await potion.save()
        codySaved.addToCart(potionSaved, 2)
        expect(codySaved.getCart().potionId).to.not.equal(null)
      })
    })
  })
})
