const { Device, DeviceInfo } = require("../models/models");
const uuid = require('uuid')
const path = require('path'); // адаптирует указанный путь к операционной системе
const ApiError = require("../error/ApiError");

class DeviceController {
    async create (req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            const filename = uuid.v4() + '.jpg' //уникальное имя (id)
            img.mv(path.resolve(__dirname, '..', 'static', filename)) //для перемещения в нужную папку

            const device = await Device.create({name, price, brandId, typeId, img: filename})
            
            if(info) {
                info = JSON.parse(info) //парсим , так как массив из formData приходит в виде строки
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                });
            }

            return res.json(device)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        

    }
    async getAll (req, res) {
        let {brandId, typeId, page, limit} = req.query
        //значения по дефолту
        page = page || 1 
        limit = limit || 9
        //считаем отступ
        let offset = page * limit - limit

        let devices;

        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})//findAndCountAll -> возвращает общее чисоло объектов
        }

        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({ where: { brandId, limit, offset }})//указываем где искать, по каким полям
        }

        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { typeId, limit, offset}})
        }

        if (brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { brandId, typeId, limit, offset }})
        }

        return res.json(devices)

    }
    async getOne (req, res) {
        const {id} = req.params
        const device = await Device.findOne( { 
                where: {id},
                include: [{model: DeviceInfo, as:'info'}] //указываем модель и название поля, которое будет в этом объекте
            }
        )
        return res.json(device)
    }
    
}
module.exports = new DeviceController();