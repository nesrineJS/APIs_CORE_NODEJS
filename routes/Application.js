module.exports = function (app) {

    const application = require('../controllers/Application');
    const verifyToken = require('../config/VerifyToken')
    /*FORMAT JSON
        {
            "id_app":3
        }    */
    // Update an application with Status
    app.put('/core/application/status/',verifyToken, application.Status);


    /*FORMAT JSON
        {
         "id_app":3
        }    */
    // Update an application with mode
    app.put('/core/application/mode/',verifyToken, application.Mode);

    /*FORMAT JSON
        {
                "id_app":  5,
                "id_developer": 2,
                "title": "IOS",
                "description":"application_pour_les_ios" ,
                "language_set":"J2EE;js;" ,
                "url" : "https://url/packageIOS",
                "id_type_app": "1"
        }
      */
    // update an application
    app.put('/core/application/Update/',verifyToken, application.Update);

    /*FORMAT JSON
        {
               
                "id_developer":79,
                "title": "rien",
                "description":"rien",
                "language_set":"css;js;",
                "url":"https://url/packageapps"
                "id_type_app":3
              
        }    */
    // add a application
    app.put('/core/application/Add/',verifyToken, application.Add);

    /*FORMAT JSON


        {
        "id_developer":"1",
        "id_app":  "2"
    }
    */
    // viwe by developer in an application
    app.put('/core/application/dev/',verifyToken, application.ViewByDeveloper);

    /*FORMAT JSON
        {
        "id_developer":"1",
        "id_app":  "2"
    }
    */
    // viwe by developer in an application
    app.put('/core/application/time/', application.ViewByKeyTime);
    /*FORMAT JSON
{
"id_developer":"78",
"p_keyTime":  "Today"
}
*/
}
