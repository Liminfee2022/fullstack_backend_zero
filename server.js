require('dotenv').config();
const express = require('express')
const path = require('path');
const configViewEngine = require('./src/config/viewEngine');
const webRoutes = require('./src/routes/web');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 8088;

//config template engine
configViewEngine(app);

//Route
app.use('/test', webRoutes);

//test connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'hoidanit'
});

connection.query(
  'select * from Users u',
  function (err, results, fields) {
    console.log(results);
    console.log(fields);
  }
);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})