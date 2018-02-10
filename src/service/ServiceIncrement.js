import axios from 'axios';
import api from './api.js';

export default function ServiceIncrement(data, cb) {
    axios({
        url: api.increment.url,
        method: api.increment.method,
        params: data
    }).then(response => {
        cb(response.data);
    }).catch((e) => {
        console.log('ServiceLogin is error', e);
    });
}
