module.exports = function(app) {
    const typeAuthentication = require('../controllers/TypeAuthentication');
    const verifyToken = require('../config/VerifyToken')


    // View all typeAuthentications
    app.get('/core/typeAuthentication',typeAuthentication.View);

    // Update a typeAuthentication with Status   
    app.put('/core/typeAuthentication/status/', typeAuthentication.Status);
    /*
    {
	
	"id_type_auth":2
    }
    */

     // view a typeAuthentication for a developer   
     app.put('/core/typeAuthentication/viewbydevp/', verifyToken, typeAuthentication.ViewDev);
}

