import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники'},
            { id: 8, name: 'Смартфоны'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Атлант'},
            {id: 4, name: 'ASUS'},
            {id: 5, name: 'HP'},
        ]
        this._devices = [
            {id:5, name: "12 pro", price: 100000, raiting: 0, img: "ca459bff-043b-43e4-bb28-d00bae0c6f42.jpg"},
            {id:6, name: "A52", price: 30000, raiting: 0, img: "c85e8760-b797-4067-b9fb-e3e92f3c9ce9.jpg"},
            {id:4, name: "Атлант 4008", price: 18000, raiting: 0, img: "4870a16f-0ab0-426c-b5f2-1f279712aff2.jpg"},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }
    //сеттеры состояния (экшены)
    setType(types){
        this._types = types
    }
    setDevice(devices){
        this._devices = devices
    }
    setBrand(brands){
        this._brands = brands
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    //компьютед функции. Вызываются если переменная внутри, была измененена
    get types(){
        return this._types
    }
    get devices(){
        return this._devices
    }
    get brands(){
        return this._brands
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}