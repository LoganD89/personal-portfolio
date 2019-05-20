const mailgun = require("mailgun-js");
const DOMAIN = "sandbox657fb44ec7954156b9fda34bb4af4789.mailgun.org";
const mg = mailgun({apiKey: "87caf812ecf6036a98cc34a7828b772d-52b0ea77-11dc4301", domain: DOMAIN});
const data = {
	from: "Mailgun Sandbox <postmaster@sandbox657fb44ec7954156b9fda34bb4af4789.mailgun.org>",
	to: "logandempsey199@gmail.com",
	subject: "Hello",
	text: "Testing some Mailgun awesomness!"
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});


