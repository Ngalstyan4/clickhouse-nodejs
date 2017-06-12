var request = require('request-promise');

function url_parse(config) {
    var _url = ['http://'];
    if (config.user){
        _url.push(config.user, ':', config.pass, '@');
    }
    _url.push(config.host, ':', config.port, '/');
    return _url.join('');
}

module.exports = function (config) {
    var url = url_parse(config);
    console.log(url);

    return {
        query: function (queryString) {
            return request([url, '?query=', queryString].join(''));
        }
    };
};