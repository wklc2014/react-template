import axios from 'axios';
import API from './api.js';

export default function ServiceIncrement(data, cb) {
    axios({
        url: API.increment,
        method: 'get',
        params: data
    }).then(response => {
        cb('ok', {
            data: response.data
        });
    }).catch((e) => {
        console.log('ServiceLogin is error', e);
    });
}
