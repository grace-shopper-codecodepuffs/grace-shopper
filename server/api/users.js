const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// router.post('/signup', async (req, res, next) => {
//   try {
//     const newUser = await User.create(req.body)
//     res.status(201).json(newUser)
//   } catch (error) {
//     next(error)
//   }
// })
