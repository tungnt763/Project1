const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('hoidanit', 'root', null, {
    host: 'localhost', // hoac thay bang dia chi IP
    dialect: 'mysql',
    logging: false
});

// co async va await de cho biet la day la 1 ham bat dong bo can phai co tgian de tra ra kqua
let connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;