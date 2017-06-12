# clickhouse-nodejs
A node.js client for Yandex Clickhouse

Let's create a client instance by calling 
```javascript
var clickhouse = requre('clickhouse-nodejs');
var client = clickhouse();
client.query('select * from bag');
```
