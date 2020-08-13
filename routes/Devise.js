module.exports = function(app) {
    const devise = require('../controllers/Devise');

    //--------------- Retrieve all typeAuth-------------------------
    app.put('/core/devises/All', devise.View);

    //-------------- Update a typeAuth with Status--------------------
    /* {"id_devise":"DT"}
    */
    app.put('/core/devises/status/', devise.Status);

    //--------------- fectch by id_devise------------------------------
    /* {"id_devise":"$"}
    */
    app.put('/core/devises/',devise.ViewById);

    //------------------ Insert a devise-------------------------------
    /* {"id_devise":"YT",
          "label":"YT",
          "entry_user":"ADMIN",
          "taux":"5.6",
           "edit_user":"ADMIN"
        }
    */
       app.put('/core/devises/add/', devise.Add);
    //----------------- update a devise---------------------------
    /*  {"id_devise":"YT",
          "label":"YT",
          "entry_user":"ADMIN",
          "taux":"5.6",
           "edit_user":"ADMIN"
         }
    */
    app.put('/core/devises/update/', devise.Update);

}
