module.exports = function(app) {
    const module = require('../controllers/Module');

    //-------- Retrieve all typeAuth---------------------
    app.get('/core/modules', module.View);

    //---------- Update a typeAuth with Status------------
    /* {"id_module":"1"}
    */
    app.put('/core/modules/status/', module.Status);
    //---------- fectch by role-----------------
    /* {"role_set":"adm"}
    */
   app.put('/core/modules/role/', module.ViewByRole);

}
