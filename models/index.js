const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const UserModel = require('./user')
const ProductModel = require('./product')


// const db = new Sequelize({
//   database: "shopping-auth-db",
//   dialect: 'postgres'
// })

const db = new Sequelize(process.env.DATABASE_URL , {
  dialect: 'postgres'
});

// if (process.env.NODE_ENV === 'production') {
//   // If the node environment is production, connect to a remote PSQL database
//   const db = new Sequelize(process.env.DATABASE_URL , {
//     dialect: 'postgres'
//   });
// }
// else {
//   // Else connect to a local instance of PSQL running on your machine
//   const db = new Sequelize({
//     database: '', // Name of your local database
//     dialect: 'postgres'
//   });
// }

const User = UserModel(db, Sequelize);

// const User = UserModel(db, Sequelize);
User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(
        user.password,
        Number(process.env.SALT_ROUNDS)
    )
    user.coins = 1000;
    user.password = hashedPassword
})

const Product = ProductModel( db, Sequelize);

User.hasMany(Product);
Product.belongsTo(User);
// User.hasMany(Product)
// Product.hasMany(Cart)
// Cart.hasMany(Product)


module.exports = {
  db,
  User,
  Product

}
