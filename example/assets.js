/**
* Specify the assets
*/

var pound              = require('../') // or require('pound') in your case
,   defineAsset        = pound.defineAsset;

// Default parameters are:
// pound.public        = __dirname + '/public';
// pound.resolve.css   = function(filename){return this.publicDir + '/css/'+filename+'.css';};
// pound.resolve.js    = function(filename){return this.publicDir + '/js/'+filename+'.js';};

// Override default resolve function for `$js` and `$css`
pound.resolve.js       = function(filename){return __dirname + '/assets/js/'+filename+'.js';};
pound.resolve.css      = function(filename){return __dirname + '/assets/css/'+filename+'.css';};

// Add new resolve function for `$myCssDir` and `$appjs`
// The resolve function's result will replace `$resolveFunctionName` for each resources
pound.resolve.myCssDir = function(filename){return __dirname + '/assets/css/'+filename+'.css';};
pound.resolve.appjs    = function(filename){return __dirname + '/app/'+filename+'.js';};

defineAsset({name:'home'}, {
  // Css assets
  css:[
    '$myCssDir/bootstrap-responsive.0.2.4'  // will resolve $js with the pound.resolve.myCssDir function
  , '$myCssDir/bootstrap.0.2.4'
  , '$myCssDir/font-awesome.2.0'
  ],

  // JS assets
  js:[
    '$js/jquery.1.7.2'  // will resolve $js with the pound.resolve.js function
  , '$js/bootstrap.0.2.4'
  ]
});

defineAsset({name:'app', extend:'home'}, {
  css:[
    '$css/global'
  ],

  js:[
    {'MyApp.env':{}} // object
  , '$js/bootbox.2.3.1'
  , '//socket.io.js' // url
  , '$appjs/app' // Backbone.sync override
  ]
});

module.exports = pound;