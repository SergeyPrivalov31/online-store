require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json())//для того что бы парсить json формат

app.get('/', (req, res) => {
    res.status(200).json({message: 'Сервер Работает!!!'})
})

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

