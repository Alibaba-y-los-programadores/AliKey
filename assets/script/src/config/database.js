const mysql2 = require('mysql2');

const database = mysql2.createConnection({
    host: 'containers-us-west-169.railway.app',
    user: 'root',
    password: '9Xe5ruk8lOmx3jkKSLCP',
    port: '6470',
    database: 'railway',
});

module.exports = database;