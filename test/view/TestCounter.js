var projectConfig = require('../../config/project.js');
var __SERVER__ = projectConfig.devServer;
var host = `http://${__SERVER__.host}:${__SERVER__.port}`;

var pageUrl = host + '/index.html';
var page = require('webpage').create();

page.open(pageUrl, function(status) {
    if (status !== 'success') {
        console.log('open url is fail');
        phantom.exit();
    } else {
        page.includeJs(jqueryUrl, function() {
            page.evaluate(function() {
                $("button").click();
            });
            phantom.exit();
        });
    }
});
