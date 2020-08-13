const logger = require('../config/logger')
const  db=require('../config/db.config')
const oauth = db.Oauth;


 //Update a status token
const Status =(request, response) => { 
    
    var p_token = request.body.token;     
 
    db.sequelize.query('SELECT * FROM ctl_oauth_status(:token) ',

            { replacements: {token : p_token }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: oauth,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(oauth => {
            logger.info(oauth)
            response.json(oauth)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

 
//Add a token
const Add =(request, response) => { 
    
    var p_token = request.body.token;  
    var p_ip = request.body.ip; 
    var p_id_developer = request.body.id_developer; 
    var p_id_app_api = request.body.id_app_api; 
    var p_users = request.body.users; 
    var p_end_date = request.body.end_date; 
    var p_info = request.body.info; 
    var p_code = request.body.code; 

    db.sequelize.query('SELECT * FROM ctl_oauth_add(:token , :ip, :id_developer , :id_app_api , :users , :end_date, :info, :code) ',
    { replacements: {token : p_token , ip : p_ip, id_developer : p_id_developer , id_app_api : p_id_app_api , users : p_users , end_date : p_end_date  ,info : p_info  ,code : p_code}, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: oauth,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(oauth => {
            logger.info(oauth)
            response.json(oauth)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });   
};

module.exports = {
    Status, 
    Add
}