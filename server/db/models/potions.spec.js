const {expect} = require('chai')
const db = require('../index')
const Potion = db.model('potion')

describe('Potion model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('inStock', () => {
      let lovePotion
      let hex

      beforeEach(async () => {
        lovePotion = await Potion.create({
          name: 'Amor',
          quantity: 15
        })
        hex = await Potion.create({
          name: 'Jello Legs',
          quantity: 0
        })
      })

      it('returns true when qt is > 0', () => {
        expect(lovePotion.isInStock()).to.be.equal(true)
      })
      it('returns false if qt is 0', () => {
        expect(hex.isInStock()).to.be.equal(false)
      })
    })
  })
})
