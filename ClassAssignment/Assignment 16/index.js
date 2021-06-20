function sendMail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "taiwotola319@gmail.com",
	Password : "HORLARMEYIDHEY2929",
	To : 'abdulroheemadebogun@gmail.com',
	From : "Ranco Academy",
	Subject : "Reminder",
	Body : "This is to remind you that, Harmony Innovation Hub Bootcame will commence in 30 minutes time.<br> Thank you <b>Management</B>",
	}).then(
		message => alert("mail sent successfully")
	);
}
