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
        'https://vignette.wikia.nocookie.net/shop-heroes/images/b/b6/Elven_Dew.png/revision/latest?cb=20151202220554',
      price: 499.99
    }),
    Potion.create({
      name: 'Jello Legs',
      description:
        'This hex of a potion will hobble your enemies! Do you need to run away? Throw it at them. Do you want to prank your neighbor who lives at the top floor of a 4-story-walkup? They will hate you forever!',
      quantity: 200,
      picture:
        'https://cdn1.iconfinder.com/data/icons/medieval-9/200/fire_flask_magic_potion_spell_sphere_witch-512.png',
      price: 49.99
    }),
    Potion.create({
      name: 'Baby bottom skin',
      description:
        'Apply liberally to your face, and your skin will be smooth and perfect within 15 minutes! Only lasts for about 4 hours, so make sure to buy 4 for each day!',
      quantity: 1000,
      picture: 'https://www.freeiconspng.com/uploads/potion-icon-png-27.png',
      price: 9.95
    }),
    Potion.create({
      name: 'Eight Hours',
      description:
        'eight hours of sleep in a bottle. Stay up all night studying? Drink eight hours, to feel refreshed, as if you had gotten a full night of sleep. WARNING: SHOULD NOT BE USED MORE THAN TWO DAYS IN A ROW. SIDE EFFECTS ARE LITERALLY BRAIN MELTING.',
      quantity: 50,
      picture:
        'https://cdn0.iconfinder.com/data/icons/education-flat-7/128/23_Flask-128.png',
      price: 29.99
    }),
    Potion.create({
      name: 'Perfect Eyesight',
      description:
        "One drop in each eye in the morning and you'll have 20/20 vision for the day! 1 bottle should last you the entire month if used correctly.",
      quantity: 75,
      picture:
        'https://cdn4.iconfinder.com/data/icons/imod/128/Software/labo.png',
      price: 10.0
    }),
    Potion.create({
      name: 'Animal Fun',
      description:
        'Put three drops into your morning beverage, squeeze your eyes tightly shut as you drink, and spend the day as the animal of your choice. Lasts 6-8 hours.',
      quantity: 40,
      picture:
        'https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Potion-128.png',
      price: 185.0
    }),
    Potion.create({
      name: 'Icarus',
      description:
        'Place two drops in each ear and enjoy the magical experience of flight. Should avoid the sun otherwise risk immediate combustion. #GetLifted',
      quantity: 75,
      picture:
        'https://cdn3.iconfinder.com/data/icons/humano2/128x128/categories/applications-science.png',
      price: 300.0
    }),
    Potion.create({
      name: 'Fever Flush',
      description:
        'Take three drops to immediately develop symptons of a fever or cold. Use this to get out of class or work- just be warned, if more than three drops are taken, it can result in vomiting and a rash.',
      quantity: 35,
      picture:
        'https://cdn4.iconfinder.com/data/icons/halloween-2-5/226/8-128.png',
      price: 29.99
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
