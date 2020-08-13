module.exports = function(app) {
   
    const historic =require('../controllers/Historic');

  /*FORMAT JSON
   {id_dev ,id_app_api ,begin_date ,end_date}
    */
    // Retrieve all historic
    app.put('/core/historic', historic.View);


     /*FORMAT JSON
   {id_dev:1 ,id_app_api:1 ,begin_date:'2018-11-10 17:37:54' ,end_date:'2018-11-15 17:37:54'}
    */
    // view by developer
    app.put('/core/historic/dev/', historic.ViewByDeveloper);


     /*FORMAT JSON
    {
		 "users": "dev1",
		 "begin_date": "2018-11-13T01:37:54.552Z",
         "end_date": "2018-11-15T01:37:54.552Z"
    }

    */
    // view by user
    app.put('/core/historic/user/', historic.ViewByUser);
}
