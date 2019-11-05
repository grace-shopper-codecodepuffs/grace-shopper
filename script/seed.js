'use strict'

const db = require('../server/db')
const {User, Potion, Address} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '123',
      firstName: 'Cody',
      lastName: 'Pugster'
    }),
    User.create({
      email: 'murphy@email.com',
      password: '123',
      firstName: 'Murphy',
      lastName: 'Meowman'
    })
  ])
  const potions = await Promise.all([
    Potion.create({
      name: 'Love Me Long Time',
      description:
        'The most powerful love potion in existence. Do you want someone to love you forever? This is for you.',
      quantity: 300,
      picture:
        'https://cdn3.iconfinder.com/data/icons/valentine-2023/595/Valentine_09-512.png',
      price: 499.99
    }),
    Potion.create({
      name: 'Jello Legs',
      description:
        'This hex of a potion will hobble your enemies! Do you need to run away? Throw it at them. Do you want to prank your neighbor who lives at the top floor of a 4-story-walkup? They will hate you forever!',
      quantity: 200,
      price: 49.99
    }),
    Potion.create({
      name: 'Baby bottom skin',
      description:
        'Apply liberally to your face, and your skin will be smooth and perfect within 15 minutes! Only lasts for about 4 hours, so make sure to buy 4 for each day!',
      quantity: 1000,
      price: 9.95
    })
  ])
  const address = await Promise.all([
    Address.create({
      name: 'Booty booty booty',
      line1: '350 Muggle Hump',
      line2: 'Apt 7W',
      city: 'Broomsticktonville',
      state: 'Kentucky',
      zip: '90210'
    }),
    Address.create({
      name: 'my office!',
      line1: '13 Owl Road',
      city: 'Wandington',
      state: 'Salem',
      zip: '37451'
    }),
    Address.create({
      name: 'headwig',
      line1: '666 Devils Lair',
      line2: 'PH',
      city: 'Bloody',
      state: 'Hell',
      zip: '66666'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${potions.length} potions`)
  console.log(`seeded ${address.length} addresses`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
