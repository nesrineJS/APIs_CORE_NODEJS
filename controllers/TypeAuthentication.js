const logger = require('../config/logger')
const  db=require('../config/db.config')
const typeAuthentication = db.TypeAuthentication;

// FETCH All typeAuthentication
const View = (request, response) => {
    typeAuthentication.findAll().then(type_authentication => {
        response.json(type_authentication)
        logger.info(type_authentication)

    }).catch(err => {
        logger.error(err);
        res.status(500).json({msg: "error", details: err});
    });
};


 //Update a typeAuthentication
const Status =(request, response) => { 
    
    var p_id_type_auth = request.body.id_type_auth;    
    
    db.sequelize.query('SELECT * FROM ctl_type_authentication_status(:id_type_auth) ',

            { replacements: {  id_type_auth: p_id_type_auth}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: typeAuthentication,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(typeAuthentication => {
            logger.info(typeAuthentication)
            response.json(typeAuthentication)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};


 //Update a typeAuthentication
 const ViewDev =(request, response) => { 
    
    var p_id_developer = request.body.id_developer;    
    
    db.sequelize.query('SELECT * FROM ctl_developer_authentication_check(:id_developer) ',

            { replacements: {  id_developer: p_id_developer}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: typeAuthentication,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(typeAuthentication => {
            logger.info(typeAuthentication)
            response.json(typeAuthentication)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

module.exports = {
    View,
    Status,
    ViewDev,
}