const logger = require('../config/logger')
const  db=require('../config/db.config')
const Api_language = db.api_language;

 //Add an api_language
 const Add =(request, response) => { 
    var p_id_api= request.body.id_api;
    var p_id_language =request.body.id_language;
    var p_use=request.body.use;
    db.sequelize.query('SELECT * FROM ctl_api_language_add(:id_api,:id_language,:use) ',

           { replacements: {id_api:p_id_api,id_language:p_id_language,use:p_use}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: Api_language,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Api_language => {
            logger.info(Api_language)
            response.json(Api_language)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

const Update =(request, response) => { 
   
    var p_id_api = request.body.id_api;
    var p_id_language =request.body.id_language;
    var p_use=request.body.use;
    db.sequelize.query('SELECT * FROM ctl_api_language_add(:id_api,:id_language,:use) ',

           { replacements: {id_api:p_id_api,id_language:p_id_language,use:p_use}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: Api_language,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Api_language => {
            logger.info(Api_language)
            response.json(Api_language)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
};

// view an api_language by a criteria
const ViewByCriteria = (request, response) => {
    var p_id_api=request.body.id_api; 
    var p_id_language=request.body.id_language;
       
    db.sequelize.query('SELECT * FROM ctl_api_language_viewbycriteria(:id_api,:id_language) ',

            { replacements: { id_api:p_id_api,id_language:p_id_language }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: Api_language,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Api_language => {
            logger.info(Api_language)
            response.json(Api_language)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
    
}; 
//Increment a use of an api
const Increment = (request, response) => {
    var p_id_api=request.body.id_api; 
    var p_id_language=request.body.id_language;
       
    db.sequelize.query('SELECT * FROM ctl_api_language_increment(:id_api,:id_language) ',

            { replacements: { id_api:p_id_api,id_language:p_id_language }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: Api_language,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Api_language => {
            logger.info(Api_language)
            response.json(Api_language)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
    
}
module.exports = {
    Add,
    Update,
    ViewByCriteria,
    Increment
}