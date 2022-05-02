'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.CONST_FILE = process.env.CONST_FILE || 'constants';

let express = require('express');
let app = express();

let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let Promise = require('bluebird');
let config = require(`./config/${process.env.NODE_ENV}.js`);
let compression = require('compression');
const error = require('./app/helpers/error');
let port = process.env.PORT || 5050;

require('./app/helpers/logging')();
require('./app/helpers/validation')();
mongoose.Promise = Promise;
let mongoOptions = {useMongoClient: true, poolSize: process.env.POOL_SIZE || 100};
console.log('Mongo Options: ', mongoOptions);
console.log('config.database.URI,', config.database.URI);
console.log('config.mongoOptions.URI,', mongoOptions);
mongoose.connect(config.database.URI, mongoOptions);

// app.use(cors());
app.use(bodyParser.urlencoded(config.bodyParser.urlencoded));
app.use(bodyParser.json(config.bodyParser.json));
app.use(compression());
app.use(express.static(__dirname + '/public'));

require('./routes.js')(app);
app.use(error);
app.listen(port);

if(config.scheduler.enable) {
    scheduler.start();
}

console.log('SAMPLE-PROJECT-RUNS-ON:>> ' + port);