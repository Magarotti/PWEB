var express = require('express'); 
var app=express();
app.set('view engine', 'ejs');
app.set('views','./app/routes');
module.exports = app; 
