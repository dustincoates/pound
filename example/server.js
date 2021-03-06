var express = require('express'),
assets      = require('./assets'),
app         = express();

app.configure(function() {

  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {
    layout: false
  });
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  // Assets automatic configuration thanks to Pound
  assets.configure(app);

  // We still need express.static for serving images and fonts
  app.use(express.static(__dirname + '/public'));
});

function render(view) {return function(req, res) {res.render(view);};}

app.get('/',    render('home'));
app.get('/app', render('app'));

var port = 8081;
app.listen(port, function(){console.log('Express listening on ', port);});
