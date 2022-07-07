import axios from "axios";

//создаём два инстанца

//для обычных запросов, которые не требуют авторизации
const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
//для авторизованных запросов, автоматически будетподставляться header autorization

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//инстенс для запросов с токеном
//создаём нитерцептор(ф-ия, которая параметром принимает config)
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

//для инстанца authHost добавляем интерцептор для каждого запроса. Он будет отрабатывать перед каждым запросом и подставлять токен
$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}