var clickhouse = require('./src/clickhouse');

var defaultConfig = {
    host: 'localhost',
    port: 8123
};

module.exports = function (config) {
    return clickhouse(config || defaultConfig);
};
