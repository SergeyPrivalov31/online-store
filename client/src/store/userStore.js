import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }
    //сеттеры состояния (экшены)
    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }

    //компьютед функции. Вызываются если переменная внутри, была измененена
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
    
}