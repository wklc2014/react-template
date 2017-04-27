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
        if (ext === '.html') {
            var htmlName = path.basename(file, '.html');
            htmlConfig[htmlName] = entryPath + '/' + file;
        } else if (ext === '.js') {
            var jsName = path.basename(file, '.js');
            jsConfig[jsName] = [entryPath + '/' + file];
        }
    })
} else {
    console.log('entry path is error');
}

if (!Objectkeys(jsConfig).length) {
    console.log('webpakc entry config is error');
}

module.exports = {
    js: jsConfig,
    html: htmlConfig
};
