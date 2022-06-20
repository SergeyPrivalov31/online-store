require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileupload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleWare/errorHandlingMiddleWare')
const path = require('path')

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json())//для того что бы парсить json формат
app.use(express.static(path.resolve(__dirname, 'static')))//Явно указываем, что файлы из папки static необходимо раздавать как статику, для свободного доступа на клиенте
app.use(fileupload({}))//параметром пустой объект с опциями
app.use('/api', router)
//мидлвеар который работаетс ошибками, обязательно должен идти и регистрироваться в самом конце
app.use(errorHandler)

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

