/*******************************FETCH ALL THE COUNTRIES*********************************/
module.exports = function(app) {
    const country = require('../controllers/Country.js');
    const verifyToken= require('../config/VerifyToken')


    //VIEW ALL COUNTRIES
    app.get('/core/country',verifyToken, country.View);



    app.put('/core/country/viewbycountry/',verifyToken, country.ViewByCountry);

    /*{
        "id_developer":"80"
    }*/


    app.put('/core/country/viewdevpbycountry/', country.ViewDevByCountry);

    /*{
    "p_keyword": ""
    "id_developer":"80",
    "id_app":"", 
    "id_api":"", 
    "id_app_api":"", 
    "dlr_type":"",
    "prefix":"", 
    "id_country":"", 
    "status":"", 
    "p_begin_date":, 
    "p_end_date":"
    }*/


}
