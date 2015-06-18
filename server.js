var http = require('http');
var mail = require('./');

var port = parseInt(process.argv[2], 10);

http.createServer(function(req, res) {

    var subject = 'mail service'
    if(req.headers && req.headers.subject) {
        subject = req.headers.subject;
    }

    var mailPs = mail(subject, 'lakowske@gmail.com');
    req.pipe(mailPs.stdin);
    var msg = '';

    req.on('data', function(data) {
        console.log('request data');
        msg += data;
    });

    req.on('end', function() {
        console.log('request ended');
        console.log(msg);
        res.end('sent: ' + msg);
    })

}).listen(port);
