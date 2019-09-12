const { User }  = require('../models/index')
const bcrypt = require('bcrypt')

const seedDb = async () => {
  try {
    await User.destroy({
      where: {}
    })

    await User.create({
      name: "Awa Zabre",
      email: "awa@gmail.com",
      password: 'password'
    })

    await User.create({
      name: "Shacool",
      email: "shacool@fakemail.com",
      password: 'password'
    })

    

  } catch(e) {
    console.log(e);
  }
}

const run = async () => {
  try {
    await seedDb()
  } catch(e) {
    console.log(e)
  } finally {
    await process.exit()
  }
}

run()
