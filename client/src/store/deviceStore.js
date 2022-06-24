import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._type = [
            { id: 1, name: 'Холодильники'},
            { id: 8, name: 'Смартфоны'},
        ]
        this._brand = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Атлант'},
        ]
        this._device = [
            {id:5, name: "12 pro", price: 100000, raiting: 0, img: "ca459bff-043b-43e4-bb28-d00bae0c6f42.jpg"},
            {id:6, name: "A52", price: 30000, raiting: 0, img: "c85e8760-b797-4067-b9fb-e3e92f3c9ce9.jpg"},
            {id:4, name: "Атлант 4008", price: 18000, raiting: 0, img: "4870a16f-0ab0-426c-b5f2-1f279712aff2.jpg"},
        ]
        makeAutoObservable(this)
    }
    //сеттеры состояния (экшены)
    setType(type){
        this._type = type
    }
    setDevice(device){
        this._device = device
    }
    setBrand(brand){
        this._brand = brand
    }

    //компьютед функции. Вызываются если переменная внутри, была измененена
    get type(){
        return this._type
    }
    get device(){
        return this._device
    }
    get brand(){
        return this._brand
    }
}