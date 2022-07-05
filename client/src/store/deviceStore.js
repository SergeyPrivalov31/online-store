import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
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