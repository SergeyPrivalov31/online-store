const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, //название БД
    process.env.DB_USER, // пользователь
    process.env.DB_PASSWORD, //ПАРОЛЬ
    {
        dialect: 'postgres', //postgress || mySQL и т.п.
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)