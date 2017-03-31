var path = require('path');
var projectConfig = require('../config/project.js');
var api = require('../src/service/api.js');
var lodash = require('lodash');
// var express = require('express');
// var app = express();
var __SERVER__ = projectConfig.devServer;

// Object.keys(api).forEach(function (item, i) {
//     var obj = api[item];
//     var body = require(`./proxy${lodash.capitalize(item)}.js`);
//     if (obj.open && body) {
//         app.use(obj.url, function (req, res, next) {
//             res.status(200).json(body).end();
//         })
//     }
// })

// app.use(express.static(__dirname + '/'));

// var server = app.listen(__SERVER__.port + 1, function () {
//     var host = server.address().address;
//     var port = server.address().port;

//     console.log('localhost proxy server is listening');
// });

var Server = require("ohana");
var server = new Server();

// Object.keys(api).forEach(function (item, i) {
//     var obj = api[item];
//     var body = require(`./proxy${lodash.capitalize(item)}.js`);
//     if (obj.open && body) {

//     }
// })
server.get('/api/login.json', {
    delay: 2000,
    data: function (params, query) {
        console.log(params);
        console.log(query);
        return {
            stat: 'ok',
            data: [1, 2, 3, 4, 5]
        }
    }
})
server.start(__SERVER__.port + 1);
