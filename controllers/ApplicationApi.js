const logger = require('../config/logger')
const  db=require('../config/db.config')
const application_api = db.Application_api;

// FETCH All application_api
const View = (request, response) => {
    application_api.findAll().then(application_api => {
        response.json(application_api)
        logger.info(application_api)

    }).catch(err => {
        logger.error(err);
        res.status(500).json({msg: "error", details: err});
    });
};


// fetch by developer
const ViewByDeveloper =(request, response) => {

    var p_id_developer =  request.body.id_developer;
    var p_id_app = request.body.id_app;    
    
    db.sequelize.query('SELECT * FROM ctl_application_api_viewbydeveloper(:id_developer ,:id_app) ',

            { replacements: { id_developer : p_id_developer , id_app: p_id_app}, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: application_api,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(application_api => {
            logger.info(application_api)
            response.json(application_api)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
};


const Detail =(request, response) => {

    console.log(request.body);
    console.log('******');


    var p_id_developer =  request.body.id_developer;
    var p_id_app_api = request.body.id_app_api;

    console.log(p_id_developer);
    console.log(p_id_app_api);

    db.sequelize.query('SELECT * FROM ctl_application_api_detail(:id_developer ,:id_app_api) ',

        { replacements: { id_developer : p_id_developer , id_app_api: p_id_app_api}, type: db.sequelize.QueryTypes.SELECT }
        ,{
            model: application_api,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(application_api => {
        logger.info(application_api)
        response.json(application_api)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });
};


 //Update a status of application_api
const Status =(request, response) => { 

    var p_id_app_api = request.body.id_app_api;
   
    db.sequelize.query('SELECT * FROM ctl_application_api_status_New(:id_app_api) ',

            { replacements: {id_app_api : p_id_app_api }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: application_api,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(application_api => {
            logger.info(application_api)
            response.json(application_api)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};


 //Update a application_api
 const Update =(request, response) => { 
    
    var p_id_app_api = request.body.id_app_api;  
    var p_expired_key_date = request.body.expired_key_date;  
    var p_label = request.body.label;  
 
    db.sequelize.query('SELECT * FROM ctl_application_api_update(:id_app_api , :expired_key_date , :label) ',

            { replacements: {id_app_api : p_id_app_api , expired_key_date : p_expired_key_date , label : p_label }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: application_api,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(application_api => {
            logger.info(application_api)
            response.json(application_api)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });   
};



//Update a application_api Secret Key
const UpdateSecret =(request, response) => {

    var p_id_app_api = request.body.id_app_api;

    db.sequelize.query('SELECT * FROM ctl_application_api_secret(:id_app_api) ',

        { replacements: {id_app_api : p_id_app_api}, type: db.sequelize.QueryTypes.SELECT }
        ,{
            model: application_api,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(application_api => {
        logger.info(application_api)
        response.json(application_api)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });
};



//Add a application_api
const Add =(request, response) => { 
    
    var p_id_app = request.body.id_app;  
    var p_id_api = request.body.id_api;  
    var p_id_developer = request.body.id_developer;  
    var p_label = request.body.label;  
  
    db.sequelize.query('SELECT * FROM ctl_application_api_add(:id_app , :id_api , :id_developer , :label) ',

            { replacements: {id_app : p_id_app , id_api : p_id_api , id_developer : p_id_developer , label: p_label }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: application_api,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(application_api => {
            logger.info(application_api)
            response.json(application_api)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });  
};

module.exports = {
    View,
    Status,
    Update,
    Add,
    ViewByDeveloper,
    Detail,
    UpdateSecret
}
