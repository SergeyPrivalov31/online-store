const { Device } = require("../models/models");
const uuid = require('uuid')
const path = require('path'); // адаптирует указанный путь к операционной системе
const ApiError = require("../error/ApiError");

class DeviceController {
    async create (req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            const filename = uuid.v4() + '.jpg' //уникальное имя (id)
            img.mv(path.resolve(__dirname, '..', 'static', filename)) //для перемещения в нужную папку

            const device = await Device.create({name, price, brandId, typeId, img: filename})
            return res.json(device)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        

    }
    async getAll (req, res) {
        const devices = await Device.findAll()
        return res.json(devices)
    }
    async getOne (req, res) {
        const {id} = req.body
        const device = await Device.findOne({id})
        return res.json(device)
    }
}
module.exports = new DeviceController();