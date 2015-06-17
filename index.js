
var child_process = require('child_process');

function mail(subject, recepient) {

    var mail = child_process.spawn('ssmtp', ['-s', subject, recepient]);

    return mail;
}

module.exports = mail;
