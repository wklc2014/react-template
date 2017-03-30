var api = require('../src/service/api.js');

module.exports = function(imitator) {
    imitator(api.increment, {name: 'hello world'});
}