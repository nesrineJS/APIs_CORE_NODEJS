module.exports = function(app) {
    const developer = require('../controllers/Developer');
    const verifyToken= require('../config/VerifyToken');

// View all developers
app.get('/core/developer/view/', developer.View);

// Update a developer'status   
app.put('/core/developer/status/', developer.Status);
    /*
    {
	    "id_developer":9
    }
    */

// Add a developer
app.put('/core/developer/add/', developer.Add);
    /*
    {
        "firstname":"dev3",
        "lastname":"developer3",
        "mobile":"21699142357",
        "username":"l2tdev3",
        "id_country":"tn",
        "email":"dev3@gmail.com",
        "address":"Sousseboujaafer",
        "company":"l2t",
        "birthday_date":"1993-02-14",
        "profile_picture":"mypicture",
        "password":"dev3",
        "id_devise":"DT",
        "sexe":"h"
    }
    */
   
// View a developer by criteria
app.put('/core/developer/viewbycriteria/',verifyToken, developer.ViewByCriteria);
   /* 
   {
        "keyword":"",    
        "id_developer":"",  
        "id_country":"", 
        "begin_date":"", 
        "end_date":"" 
   }
   */

// Update all developers
app.put('/core/developer/update/',verifyToken,developer.Update);
    /*
    {
        "id_developer":9,
        "firstname":"fehmi",
        "lastname":"bchir",
        "mobile":"21692142202",
        "username":"fehmidev3",
        "email":"fehmibcr@gmail.com",
        "address":"monastir",
        "company":"L2T",
        "website":"www.dev3.com",
        "birthday_date":"1993-03-03",
        "password":"dev3",
        "sexe":"h"
        "tva":"0.2"
        "country":"tn",
        "profile_picture": "aa.png"
    }
    */


app.get('/core/developer/ViewappList/',developer.ViewAppList);
    /*
    {
        "id_developer":9
        
    }
    */



/************************************/
}