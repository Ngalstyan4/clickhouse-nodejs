/**
 * Created by david on 6/12/17.
 */
var clickhouse = require('./index');

clickhouse();

clickhouse({
    user: 'davkhech',
    pass: 1234,
    host: '1.2.3.4',
    port: 8123
});