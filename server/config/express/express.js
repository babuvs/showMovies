const express = require('express')
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./route.js')(app);
exports.app = app