module.exports = function(app) {
   
    const type_api =require('../controllers/TypeApi');

    /*FORMAT JSON
    {id_type_api , label , categ_api}
    */

    // Retrieve all senders
    app.get('/core/type_api', type_api.View);

    
     /*FORMAT JSON
    {   
        "id_type_api": 3
    }    */
    // Update a sender with Status   
    app.put('/core/type_api/status/', type_api.Status);


      /*FORMAT JSON
    {
       "id_type_api":1,
       "label":"package",
       "categ_api":1
    }   */
    // update a sender
    app.put('/core/type_api/Update/', type_api.Update);


      /*FORMAT JSON
    {
       "label":"dll",
       "categ_api":2
    }    */
     // add a sender
     app.put('/core/type_api/Add/', type_api.Add);

}
