module.exports = function(app) {
   
    const application_api =require('../controllers/ApplicationApi');
    const verifyToken= require('../config/VerifyToken')
        /*FORMAT JSON
            {id_app_api , expired_key_date ,label}
            */

               // Retrieve all application_api
                app.get('/core/application_api', application_api.View);


                /*FORMAT JSON
                    {
                    "id_app_api":4
                     }
                 */
                // Update an application_api with Status   
                app.put('/core/application_api/status/',verifyToken, application_api.Status);

                /*FORMAT JSON
                {
                "id_app_api":5,
                "expired_key_date":"2030-12-12 23:59:59",
                "label":"api_json"
                }
                 */
                // update an application_api
                app.put('/core/application_api/Update/', application_api.Update);


                /*FORMAT JSON
                {
                "id_app":  12,
                "id_api":  18,
                "id_developer":79,
                "label":  "SOAP"
               }
             */
                app.put('/core/application_api/Add/',verifyToken, application_api.Add);

                /*FORMAT JSON
            {
            "id_developer":"1",
            "id_app":  "2"
              }
             */
                // viwe by developer in an application_api
                app.put('/core/application_api/dev/',verifyToken, application_api.ViewByDeveloper);

            /*FORMAT JSON
         {
         "id_developer":"80",
         "id_app_api":  "44"
         }
         */
            app.put('/core/application_api/detail/',verifyToken, application_api.Detail);


                    /*FORMAT JSON
                {
                "id_developer":"80",
                "id_app_api":  "44"
                }
                */

        // update an application_api
        app.put('/core/application_api/Update/Secret',verifyToken, application_api.UpdateSecret);


}
