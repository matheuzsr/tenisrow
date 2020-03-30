
import axios from 'axios';

const api = axios.create({
    baseURL: "https://apitenisrow.herokuapp.com"
    //baseURL: 'http://192.168.1.109:3000'
    //baseURL: 'http://localhost:3000'
});

export default api;