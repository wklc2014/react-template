import axios from 'axios';
import api from './api.js';

export default function ServiceLogin(data, cb) {
    axios({
        url: api.login.url,
        method: api.login.method,
        params: data
    }).then(response => {
        cb(response.data);
    }).catch((e) => {
        console.log('ServiceLogin is error', e);
    });
}
