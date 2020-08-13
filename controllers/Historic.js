const logger = require('../config/logger')
const  db=require('../config/db.config')
const historic = db.Historic;

const View =(request, response) => { 
     
    db.sequelize.query('SELECT * FROM ctl_historic_view() ',

            { replacements: {  }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: historic,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(historic => {
            logger.info(historic)
            response.json(historic)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
        };

// fetch by developer
const ViewByDeveloper =(request, response) => { 
    
    var id_dev = request.body.id_developer;  
    var id_app_api = request.body.id_app_api;    
    var begin_date = request.body.begin_date;   
    var end_date = request.body.end_date;    
 
    db.sequelize.query('SELECT * FROM ctl_historic_viewbydeveloper(:p_id_dev ,:p_id_app_api ,:p_begin_date ,:p_end_date) ',

            { replacements: {  p_id_dev : id_dev , p_id_app_api: id_app_api ,p_begin_date : begin_date ,p_end_date: end_date}, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: historic,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(historic => {
            logger.info(historic)
            response.json(historic)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
};

// fetch by user
const ViewByUser =(request, response) => { 
    
    var users = request.body.users;  
    var begin_date = request.body.begin_date;   
    var end_date = request.body.end_date;    
 
    db.sequelize.query('SELECT * FROM ctl_historic_viewbyuser(:p_users ,:p_begin_date ,:p_end_date) ',

            { replacements: {  p_users : users  ,p_begin_date : begin_date ,p_end_date: end_date}, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: historic,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(historic => {
            logger.info(historic)
            response.json(historic)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
};

module.exports = {
    View,
   ViewByDeveloper,
   ViewByUser
}