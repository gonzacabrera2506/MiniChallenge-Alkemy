const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//routes
const operationRoutes = require('./routes/operation');

//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3307,
    database: 'budgetmanager'
}, 'single'));


//routes
app.use('/', operationRoutes);


//statics files


//init server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});