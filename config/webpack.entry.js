/**
 * 读取入口文件夹
 * 包括 js 入口和生成 html 模版
 */
var fs = require('fs');
var path = require('path');

var entryPath = path.resolve(__dirname, '../src/entry/');
var isExist = fs.existsSync(entryPath);

var jsConfig = {};
var htmlConfig = {};

var results = [];
if (isExist) {
    results = fs.readdirSync(entryPath);
    results.forEach(function(file) {
        var ext = path.extname(file);
        var htmlName = path.basename(file, '.html');
        var jsName = path.basename(file, '.js');
        switch (ext) {
            case '.html':
                htmlConfig[htmlName] = entryPath + '/' + file;
                break;
            case '.js':
                jsConfig[jsName] = [entryPath + '/' + file];
                break;
        }
    })
} else {
    console.log('entry path is error for not exist...');
}

if (!Object.keys(jsConfig).length) {
    console.log('There are no js entry for webpack...');
}

module.exports = {
    js: jsConfig,
    html: htmlConfig
};
