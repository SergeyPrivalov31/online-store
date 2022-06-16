require('dotenv').config()
const express = require('express');
const sequelize = require('./db')

const PORT = process.env.PORT || 5000;

const app = express();

const start = async() => {
    try {
        await sequelize.authenticate() //устанавливаем подключение с базой данных
        await sequelize.sync() //сверяем сосояние данных со схемой данных
        app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`));

    } catch (e) {
        console.log(e)
    }
}

start();

