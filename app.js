
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
require('dotenv').load();
var app = express();
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const DIR = './uploads';
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
  }
});
let upload = multer({storage: storage});

const logger = require('./config/logger')
const db =require('./config/db.config');


const Cors = require("cors");

app.use(Cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));




app.post('/core/developer/view/upload',upload.single('photo'), function (req, res) {
  if (!req.file) {
    console.log("No file received");
    return res.send({
      success: false
    });

  } else {
    console.log('file received');
    return res.send({
      success: true
    })
  }
});


db.Sequelize;
require('./routes/Routes.js')(app);
var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  logger.info('Express server listening on port ' + port);
});

module.exports = app;
