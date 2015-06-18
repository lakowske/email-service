
var child_process = require('child_process');

function mail(subject, recepient) {

    var mail = child_process.spawn('ssmtp', [recepient]);

    mail.stdin.write("To: " + recepient + "\n");
    mail.stdin.write("Subject: " + subject + "\n\n");
    
    return mail;
}

module.exports = mail;
