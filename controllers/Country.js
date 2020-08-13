const  db=require('../config/db.config.js') /* ajouter path vers db config*/
const Country = db.country;
const logger = require('../config/logger')
/**************FETCH ALL COUNTRIES************************/
const View = (req, res) => {

    Country.findAll().then(country => {
        res.json(country)
        logger.info(country)

    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};


//View  Sms of Developer by country
const ViewByCountry =(request, response) => {

    var p_id_developer = request.body.id_developer;
    db.sequelize.query('SELECT * FROM ctl_country_viewbydeveloper(:id_developer) ',

        { replacements: {id_developer:p_id_developer}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: Country,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(Country => {
        logger.info(Country)
        response.json(Country)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};

   
//View  Sms of Developer by country for entete
const ViewDevByCountry =(request, response) => {

    console.log("----------------------");
    console.log(request.body);
    console.log("----------------------");

    var p_keyword = request.body.p_keyword;
    var p_id_developer = request.body.id_developer;
    var p_id_app = request.body.id_app;
    var p_id_api = request.body.id_api;
    var p_id_app_api = request.body.id_app_api;
    var p_dlr_type = request.body.dlr_type ;
    var p_prefix = request.body.prefix ;
    var p_id_country = request.body.id_country ;
    var p_status = request.body.status;
    var p_begin_date = request.body.p_begin_date;
    var p_end_date = request.body.p_end_date;


    db.sequelize.query('SELECT * FROM ctl_sms_mt_countbydevelopper(:p_keyword,:id_developer,:id_app, :id_api, :id_app_api, :dlr_type,:prefix, :id_country, :status, :p_begin_date, :p_end_date) ',

        { replacements: {p_keyword:p_keyword, id_developer:p_id_developer, id_app:p_id_app,id_api: p_id_api,
            id_app_api: p_id_app_api, dlr_type:p_dlr_type,prefix:p_prefix, id_country:p_id_country,status :p_status,
            p_begin_date: p_begin_date,p_end_date:p_end_date }, type: db.sequelize.QueryTypes.SELECT },
        {
            model: Country,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(Country => {
        logger.info(Country)
        response.json(Country)
    }).catch(err => {

        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};


module.exports = {
    View,
    ViewByCountry,
    ViewDevByCountry

}



