const ApiError = require('../error/ApiError')

// если класс ошибки ApiError, то отправляем сообщение со статус кодом из ошибки
module.exports = (err, req, res, next) => {
    if (err instanceof ApiError) {
       return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: 'Непредвиденная ошибка!'})
}