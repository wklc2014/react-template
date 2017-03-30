import Pretender from 'pretender';

import API from '../service/api.js';
import MockIncrement from './MockIncrement.js';

const server = new Pretender(function () {
    this.get(API.increment, MockIncrement, 2000);
});

server.prepareBody = function (body) {
    return body ? JSON.stringify(body) : '{"error": "not found"}';
};

server.unhandledRequest = function(verb, path, request) {
    console.log("what is this I don't even...");
}

if (__PROD__) {
    server.shutdown();
}
