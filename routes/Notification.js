module.exports = function(app) {
    const notification = require('../controllers/Notification');
    const verifyToken= require('../config/VerifyToken')

// View all notifications
app.get('/core/notification', notification.View);


// Update an notification status with id_notification 
app.put('/core/notification/status/', notification.Status);
/*
{
	"id_notif":2
}
*/

// Add a notification
app.put('/core/notification/add/',verifyToken, notification.Add);
/*
{
	"label":"mobilenotification",
	"body":"thisisamobilenotification",
	"type_notif":"sms",
	"notif_from":"from",
	"notif_cc":"to",
	"param1":"notifparam"
}
*/

// View a notification by criteria
app.put('/core/notification/viewbycriteria/', notification.ViewByCriteria);
/*
{
"keyword":	"smsnotif",
"type_notif":	"sms"
}
*/

// Update all of  notification
app.put('/core/notification/update/', notification.Update);
/*
{
	"id_notif":1,
	"label":"smsnotif",
	"body":"smsnotifbody",
	"type_notif":"sms",
	"notif_from":"from",
	"notif_cc":"destination",
	"param1":"paramsmsnotif"
}
*/
}
