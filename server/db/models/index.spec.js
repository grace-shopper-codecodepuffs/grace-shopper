const {expect} = require('chai')
const db = require('../index')
const {User, Order, Address, Potion, OrdersPotions} = require('../models')
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
    let potion2
    beforeEach(async () => {
      cody = await User.create({
        email: 'marley@badtothebone.com',
        password: 'treatsforlife',
        firstName: 'Marley',
        lastName: 'Teag'
      })
      potion = await Potion.create({
        name: 'eight hours',
        description:
          'eight hours of sleep in a bottle. Stay up all night studying? Drink eight hours, to feel refreshed, as if you had gotten a full night of sleep. WARNING: SHOULD NOT BE USED MORE THAN TWO DAYS IN A ROW. SIDE EFFECTS ARE LITERALLY BRAIN MELTING.',
        quantity: 50,
        price: 29.99
      })
      potion2 = await Potion.create({
        name: 'perfect eyesight',
        description:
          "One drop in each eye in the morning and you'll have 20/20 vision for the day! 1 bottle should last you the entire month if used correctly.",
        quantity: 75,
        price: 10.0
      })
    })
    describe('getCart', () => {
      it("returns Cody's cart, initially empty", async () => {
        let cart = await cody.getCart()
        cart = cart.dataValues
        expect(cart.userId).to.be.equal(cody.id)
        expect(cart.isCart).to.be.equal(true)
      })
    })

    describe('addToCart', () => {
      it('adds a potion to users cart', async () => {
        await cody.addToCart(potion, 2)
        const cart = await cody.getCart()
        let marleysCart = await OrdersPotions.findAll({
          where: {
            orderId: cart.id
          }
        })
        expect(marleysCart[0].dataValues.potionId).to.be.equal(potion.id)
        expect(marleysCart[0].dataValues.quantity).to.be.equal(2)
        expect(marleysCart[0].dataValues.price).to.be.equal(potion.price)
      })

      it('can have multiple potions in cart', async () => {
        await cody.addToCart(potion, 2)
        await cody.addToCart(potion2, 4)

        const cart = await cody.getCart()
        let marleysCart = await OrdersPotions.findAll({
          where: {
            orderId: cart.id
          }
        })
        expect(marleysCart[0].dataValues.potionId).to.be.equal(potion.id)
        expect(marleysCart[1].dataValues.potionId).to.be.equal(potion2.id)
        expect(marleysCart[0].dataValues.quantity).to.be.equal(2)
        expect(marleysCart[1].dataValues.quantity).to.be.equal(4)
        expect(marleysCart[0].dataValues.price).to.be.equal(potion.price)
        expect(marleysCart[1].dataValues.price).to.be.equal(potion2.price)
      })
    })

    describe('removeFromCart', () => {
      it('removes a product from users cart', async () => {
        await cody.addToCart(potion, 2)
        await cody.removeFromCart(potion)

        const cart = await cody.getCart()
        const potionsInCart = await OrdersPotions.findAll({
          where: {
            orderId: cart.id
          }
        })
        expect(potionsInCart.length).to.be.equal(0)
      })

      it('removes the correct product from users cart', async () => {
        await cody.addToCart(potion, 2)
        await cody.addToCart(potion2, 5)
        await cody.removeFromCart(potion)

        const cart = await cody.getCart()
        const potionsInCart = await OrdersPotions.findAll({
          where: {
            orderId: cart.id
          }
        })
        expect(potionsInCart.length).to.be.equal(1)
        expect(potionsInCart[0].potionId).to.be.equal(potion2.id)
      })
    })

    describe('editPotionCartQuantity', () => {
      it('edits quantity of a product in users cart', async () => {
        await cody.addToCart(potion, 2)
        await cody.editPotionCartQuantity(potion, 1)

        const cart = await cody.getCart()

        const potionsInCart = await OrdersPotions.findOne({
          where: {
            orderId: cart.id,
            potionId: potion.id
          }
        })
        expect(potionsInCart.dataValues.quantity).to.be.equal(1)
      })
    })

    describe('getCartTotal', () => {
      it('get total of cart', async () => {
        await cody.addToCart(potion, 2)
        await cody.addToCart(potion2, 4)
        const cartTotal = await cody.getCartTotal()

        expect(cartTotal).to.be.equal(99.98)
      })
    })
  })
})
