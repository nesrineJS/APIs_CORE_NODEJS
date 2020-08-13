const logger = require('../config/logger')
const  db=require('../config/db.config')
const application_share = db.Application_share;

 //Update a status of application_share =activation or desactivation
const Status =(request, response) => { 
    
    var p_id_developer =  request.body.id_developer;
    var p_id_app = request.body.id_app; 

    db.sequelize.query('SELECT * FROM ctl_application_share_status(:id_developer, :id_app) ',

            { replacements: {id_developer : p_id_developer, id_app : p_id_app }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: application_share,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(application_share => {
            logger.info(application_share)
            response.json(application_share)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });  
};

//Add an application_share
const Add =(request, response) => { 
    
    var p_id_developer =  request.body.id_developer;
    var p_id_app = request.body.id_app; 
  
    db.sequelize.query('SELECT * FROM ctl_application_share_add(:id_developer, :id_app) ',

            { replacements: {id_developer : p_id_developer, id_app : p_id_app }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: application_share,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(application_share => {
            logger.info(application_share)
            response.json(application_share)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });  
};

module.exports = {
    Status,
    Add
}