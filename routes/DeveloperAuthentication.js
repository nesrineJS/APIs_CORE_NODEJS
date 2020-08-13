module.exports = function(app) {
    const developerAuthentication = require('../controllers/DeveloperAuthentication');
    const verifyToken= require('../config/VerifyToken')


// Update a developerAuthentication'status   
app.put('/core/developerauthentication/status/',verifyToken, developerAuthentication.Status);
/*
{
 "id_developer":"", 
 "id_type_auth":"" 
}
*/

// View a developerAuthentication type
    app.put('/core/developerauthentication/view/',verifyToken, developerAuthentication.View);
    /*
    {
        "id_developer":""
    }
    */





// Add a developerAuthentication
app.put('/core/developerauthentication/add/',verifyToken, developerAuthentication.Add);
/*
{
    "id_developer":"",
    "id_type_auth":"",
    "last_date":"",
    "email":"",
    "mobile":"",
    "uid":"",
    "token":"",
    "param1":"",
    "param2":""
}
*/


// Add a developerAuthentication
    app.put('/core/developerauthentication/generateToken/',verifyToken, developerAuthentication.GenerateToken);
    /*
    {
        "id_developer":"",
        "id_type_auth":""
    }
    */


// Add a developerAuthentication by social
    app.put('/core/developerauthentication/add/social', developerAuthentication.AddSocial);

    //verif authentication by id_developer and token
    app.put('/core/developerauthentication/token', developerAuthentication.ChekToken);
    // check authentication from social
    app.put('/core/developerauthentication/checkAutentication', developerAuthentication.ChekSocial);

}
