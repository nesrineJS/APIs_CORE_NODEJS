module.exports = function(app) {
   
    const oauth =require('../controllers/Oauth');

    /*FORMAT JSON
    {
            "token": "eyJz93ak4laUWw"
    }
      */
    
    // Update a token  with Status   
    app.put('/core/oauth/status/', oauth.Status);


      /*FORMAT JSON
        {
                "token": "AyJz93ak4laUWw" ,
                "ip":"127.10.10.10",
                "id_developer":10,
                "id_app_api":9,
                "users": "devp",
                "end_date":"2020-11-14 23:59:59",
                "info":"token_devp",
                "code":"wcvb02"
        }    */
     // add a token
    app.put('/core/oauth/Add/', oauth.Add);
}
