var email 	= require("/home/software1/node_modules/emailjs/email");
var server 	= email.server.connect({
   user:	"acharotariya@officebrain.com",
   password:"AJ@123456",
   host:	"mail.officebeacon.com",
   ssl:		true
	//tls: {ciphers: "SSLv3"}
});

var message	= {
   text:	"new 24 april",
   from:	"acharotariya@officebrain.com",
   to:		"ajaycharotariya@gmail.com","acharotariya@officebrain.com",
   subject:	"testing emailjs",
   attachment:

	[

      {path:"/home/software1/Desktop/logo_Footer.png", type:"image/png", headers:{"Content-ID":"<my-image>"}}
   ]
};

// send the message and get a callback with an error or details of the message that was sent
server.send(message, function(err, message) { console.log(err || message); });
console.log("message send");

// you can continue to send more messages with successive calls to 'server.send',
// they will be queued on the same smtp connection

// or you can create a new server connection with 'email.server.connect'
// to asynchronously send individual emails instead of a queue
