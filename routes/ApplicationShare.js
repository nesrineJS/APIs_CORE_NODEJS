module.exports = function(app) {
   
    const application_share =require('../controllers/ApplicationShare');

  /*FORMAT JSON
      {
        "id_developer":3,
        "id_app":2
    }
      */

      // Update an application_share with Status   
         app.put('/core/application_share/status/', application_share.Status);

         /*FORMAT JSON
      {
            "id_developer":3,
            "id_app":3
      }
    */
      // add an application_share
         app.put('/core/application_share/Add/', application_share.Add); 
}
