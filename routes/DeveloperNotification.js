module.exports = function(app) {
    const developerNotification = require('../controllers/DeveloperNotification');
    const verifyToken= require('../config/VerifyToken')

// Update a developer'status   
app.put('/core/developernotification/status/',verifyToken, developerNotification.Status);
    /*
    {
        "id_dev_notif":""
    }
    */

// View a developerNotification by developer
app.put('/core/developernotification/viewbydeveloper/', developerNotification.ViewByDeveloper);
    /*
    {
        "id_developer": "",    
        "type_notif":"",  
        "begin_date":"",  
        "end_date":""  
    }   
    */


    // View a developerNotification by SMS
    app.put('/core/developernotification/sms', developerNotification.SMS);
    /*
    {
        "id_developer": "",
        "begin_date":"",
        "end_date":""
        "status":"",

    }
    */

    // View a developerNotification by SMS
    app.put('/core/developernotification/web',verifyToken, developerNotification.Web);
    /*
    {
        "id_developer": "",
        "begin_date":"",
        "end_date":""
        "status":"",

    }
    */


    // View a developerNotification by NOTIFY
    app.put('/core/developernotification/notify',verifyToken, developerNotification.Notify);
    /*
    {
        "id_developer": "80",
        "status":"",

    }
    */
}
