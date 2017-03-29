var fs = require('fs');
var path = require('path');
var entryPath = path.resolve(__dirname, '../../src/entry/');
var isExist = fs.existsSync(entryPath);
var jsConfig = {};
var htmlConfig = {};
var results = [];
if (isExist) {
    results = fs.readdirSync(entryPath);
    results.forEach(function(file) {
        var ext = path.extname(file);
        if (ext === '.html') {
            var name = path.basename(file, '.html');
            jsConfig[name] = entryPath + '/' + name + '.js';
            htmlConfig[name] = entryPath + '/' + file;
        }
    })
} else {
    console.log('entry path is error');
}

module.exports = {
    js: jsConfig,
    html: htmlConfig
};
