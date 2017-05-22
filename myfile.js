// console.log("************");
var email 	= require("emailjs");
// console.log("111111111111111111111111111111");
var server 	= email.server.connect({
   user:    "acharotariya@officebrain.com",
   password:"AJ@123456",
   host:    "mail.officebeacon.com",
   ssl:     true

});

// console.log("2222222222222222222222222");

// send the message and get a callback with an error or details of the message that was sent
server.send({
   text:    "vadodara jj",
   from:    "acharotariya@officebrain.com",
   to:      "acharotariya@officebrain.com",
   cc:      "",
   subject: "testing emailjs"
}, function(err, message) { console.log(err || message); });
// console.log("message send");
