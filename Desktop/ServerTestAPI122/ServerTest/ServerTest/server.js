const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');



const models = require('./api/routers/modelsRouters');


const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// DB Setup
var mongoose = require('mongoose');

// DB connect
mongoose.connect('mongodb+srv://buicongdai321996:3219962014@buicongdai321996-vruoc.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
  console.log('Api server running on: ', 5000);
});

// Use Routes
app.use('/models', models);



const port = process.env.PORT || 5000;

app.listen(port);

console.log('API mockup running http://localhost:' + port);
