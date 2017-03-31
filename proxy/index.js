var path = require('path');
var projectConfig = require('../config/project.js');
// var api = require('../src/service/api.js');
// var lodash = require('lodash');
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

// app.use('/api', express.static('./'));

// var server = app.listen(__SERVER__.port + 1, function () {
//     var host = server.address().address;
//     var port = server.address().port;

//     console.log('localhost proxy server is listening at http://%s:%s', host, port);
// });

var browserSync = require("browser-sync").create();

browserSync.init({
    server: {
        baseDir: "./proxy/",
        directory: true
    },
    ui: {
        port: __SERVER__.port + 2
    },
    open: false,
    online: false,
    codeSync: true,
    port: __SERVER__.port + 1
});
