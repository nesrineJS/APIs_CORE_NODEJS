module.exports = function(app) {
    const api = require('../controllers/Api');
    const verifyToken= require('../config/VerifyToken')
// Update an api'status   
app.put('/core/api/status/', api.Status);
    /*
    {
        "id_api":10
    }
    */

// Recommendation of an api
app.put('/core/api/recommendation/',verifyToken, api.Recommendation);
    /*
    {	
       "language_set":"php;java"	
    }
    */

// Add an api
app.put('/core/api/add/', api.Add);
    /*
    {
        "id_type_api":2,
        "title":"package",
        "description":"packagejavaEE",
        "body":"bodyJEEpackage",
        "version":"v10",
        "end_date":"2030-01-12 00:00:00",
        "logo":"logopackageJee",
        "url":"urlJEEPACKAGE",
        "id_api_master":1
    }
    */
// Add an api by an admin
   // app.put('/core/api/addAdmin/',verifyToken, api.AddAdmin);
    /*
 {
     "id_type_api":2,
     "title":"package",
     "description":"packagejavaEE",
     "body":"bodyJEEpackage",
     "version":"v10",
     "end_date":"2030-01-12 00:00:00",
     "logo":"logopackageJee",
     "url":"urlJEEPACKAGE",
     "id_api_master":1
     "id_language":""
 }
 */

// View an api by criteria
app.put('/core/api/viewbycriteria/',verifyToken, api.ViewByCriteria);
    /*
    {
        "keyword":"dd",
        "id_language":"php",
        "id_type_api":"1",
        "categ_api":"1"
    }
    */


    /*
    {
        "id_api":10;
    }recommendation
    */

    // View an api detail
    app.put('/core/api/detail/',verifyToken, api.ApiDetail);


    //update all api
    app.put('/core/api/update/', verifyToken,api.Update);
        /*
    {
        "id_api":14,
        "id_type_api":1,
        "title":"apiwsdl",
        "description":"apiwsdldescription",
        "body":"wsdlapibody",
        "version":"v013",
        "end_date":"2030-01-12 00:00:00",
        "logo":"wsdlapilogo",
        "url":"https://wsdlapiurl",
        "id_api_master":1   
    }
    */

}
