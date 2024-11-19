import axios from 'axios';
import config from './config';

const api = axios.create({
    baseURL: config.backendUrl || "http://127.0.0.1:8000/api",
    headers: {
        'Content-Type': 'application/json',
    },
});


export default api;
