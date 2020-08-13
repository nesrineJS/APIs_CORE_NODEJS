module.exports = function(app) {
    const user = require('../controllers/User');   
    const verifyToken= require('../config/VerifyToken')

     //---------------- add a user---------------------------
    /* {
        "login": "amal",
        "name":"amal",
        "email": "ghali",
        "password": "fr",
        "mobile": "21698607512",
        "entry_user": "admin",
        "edit_user": "admin",
        "role": "dev",
        "module_set": ";16;"
    }*/
     app.put('/core/user/add',verifyToken,user.Add);
     //---------------- fetch bu cireteria--------------------
     /* {
        "p_keyword": "adm",
        "role": ""
    }
     */
     app.put('/core/user/criteria',verifyToken, user.ViewByCriteria);
     //----------update by  login------------------------------
       /* {
        "login": "amal",
        "name":"amal",
        "email": "ghali",
        "password": "fr",
        "mobile": "21698607512",
        "entry_user": "admin",
        "edit_user": "dev",
        "role": "dev",
        "module_set": ";16;"
    }
       */
     app.put('/core/user/update',verifyToken, user.Update);
     app.put('/core/user/status',verifyToken, user.status);
     //----------- Authenticate---------------------------
     /* {
        "login": "amal",
        "password": "fr"
    }
     */
     app.put('/core/user/authentication', user.Authenticate);
     
      app.put('/core/user/ViewByLogin',verifyToken, user.ViewByLogin);
    
     app.put('/core/user/token', user.ChekToken);
     // check authentication from social
     app.put('/core/user/checkAutentication', user.ChekAuthentication);
}
