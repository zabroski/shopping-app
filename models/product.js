module.exports = (db, Sequelize) => {
    return db.define('product', {
        name: Sequelize.STRING,
        type: Sequelize.STRING,
        price: Sequelize.INTEGER,
        image: Sequelize.STRING,
        description: Sequelize.TEXT
    })
} 