'use strict';
const finalhandler = require('finalhandler');
const http = require('http');
const serveStatic = require('serve-static');
const PORT = 8080;


// Serve up public/ftp folder
let serve = serveStatic('app', {'index': ['index.html', 'index.htm']});

// Create server
let server = http.createServer(function(req, res){
  let done = finalhandler(req, res);
  serve(req, res, done);
});

// Listen
server.listen(PORT);

console.log('Static file server running at\n  => http://localhost:' + PORT + '/\nCTRL + C to shutdown');
