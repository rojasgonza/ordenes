var express = require('express');
var bodyParser = require('body-parser');
var db = require('./config/config')
const cors = require('cors');
const routes = require('./routes');
const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

db.sync()
    .then( () => console.log('Conectado'))
    .catch( error => console.log(error))
app.use(cors());

require('./models/Cliente')
require('./models/Orden')
require('./models/OrdenItems')
require('./models/Productos')


//
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
 
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
 
    // Pass to next layer of middleware
    next();
 });

///rutas
app.use('/', routes());


const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;
app.listen(port, host, ()=>{
    console.log('el servidor esta funcionando');
});