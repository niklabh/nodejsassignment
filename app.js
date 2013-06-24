
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

var handleErrors = function(err, req, res, next) {
   if(!err) return next();
    console.log("Error Occured: "+err);
    res.send("Error Occured: "+err);
}

var customLogger = function(req,res,next){
	
	var date = new Date().toISOString().replace(/\T.+/, '');
	var fullURL = req.protocol + "://" + req.get('host') + req.url;
	console.log("Request Received " + date + " " + fullURL + " Served");
	next();
}


app.configure('development', function(){
  app.use(function(req,res,next){
  	console.log("NODE_ENV is set to development");
  	next();
  });
});

// production only
app.configure('production', function(){
  app.use(function(req,res,next){
  	console.log("NODE_ENV is set to production");
  	next();
  });
});

// all environments
app.configure(function(){
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(customLogger);

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use(handleErrors);
});



require('./routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
