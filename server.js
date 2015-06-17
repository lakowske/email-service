var http = require('http');
var mail = require('./');

var port = parseInt(process.argv[2], 10);

//register the email service with a service directory

http.createServer(function(req, res) {
    var mailPs = mail('mail service', 'lakowske@gmail.com');
    req.pipe(mailPs.stdin);
}).listen(port);
