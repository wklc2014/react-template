var projectConfig = require('../config/project.js');
var api = require('../src/service/api.js');
var lodash = require('lodash');
var express = require('express');
var app = express();
var __SERVER__ = projectConfig.devServer;

Object.keys(api).forEach(function (item, i) {
    var obj = api[item];
    var body = require(`./proxy${lodash.capitalize(item)}.js`);
    if (obj.open && body) {
        app.use(obj.url, function (req, res, next) {
            res.json(body);
        })
    }
})

var server = app.listen(__SERVER__.port + 1, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('localhost proxy server is listening at http://%s:%s', host, port);
});