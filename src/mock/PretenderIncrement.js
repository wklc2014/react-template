import api from '../service/api.js';
import PretenderLog from './PretenderLog.js';

const __URL__ = api.increment.url;
const __METHOD__ = api.increment.method;

export default function() {
    this[__METHOD__](__URL__, function(request) {
        PretenderLog(api.increment);
        const { method, params, queryParams } = request;
        return [200, {}, {
            a: 'aaa',
            b: 'bbb'
        }];
    }, 2000);
}
