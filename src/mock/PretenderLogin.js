import api from '../service/api.js';

const __MOCK__ = api.login
const __URL__ = __MOCK__.url;
const __METHOD__ = __MOCK__.method;

export default function() {
    this[__METHOD__](__URL__, function(request) {
        const { method, params, queryParams } = request;
        return [200, {}, {
            stat: 'error',
            data: {
                usename: 'aaa',
                email: '456789@qq.com'
            }
        }];
    });
}
