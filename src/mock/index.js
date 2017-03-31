/**
 * 默认情况下，pretender 会拦截所有的 ajax 请求
 * 除非显示用 passthrough 声明取消拦截
 */
import api from '../service/api.js';
import Pretender from 'pretender';
import PretenderIncrement from './PretenderIncrement.js';

const server = new Pretender();
server.map(PretenderIncrement);

Object.keys(api).forEach(v => {
    const obj = api[v];
    if (!obj.open) {
        server[obj.method](obj.url, server.passthrough);
    }
})

server.prepareBody = function (body) {
    return body ? JSON.stringify(body) : '{"error": "not found"}';
};

server.get('*.hot-update.json', server.passthrough);

if (__PROD__) {
    server.shutdown();
}
