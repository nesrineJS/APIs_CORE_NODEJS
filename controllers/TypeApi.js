const logger = require('../config/logger')
const  db=require('../config/db.config')
const type_api = db.Type_api;

// FETCH All type_api
const View = (request, response) => {
    type_api.findAll().then(type_api => {
        response.json(type_api)
        logger.info(type_api)

    }).catch(err => {
        logger.error(err);
        res.status(500).json({msg: "error", details: err});
    });
};

 //Update a status sender
const Status =(request, response) => { 
    
    var p_id_type_api = request.body.id_type_api;  
   
    db.sequelize.query('SELECT * FROM ctl_type_api_status(:id_type_api) ',

            { replacements: {id_type_api : p_id_type_api }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: type_api,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(type_api => {
            logger.info(type_api)
            response.json(type_api)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            }); 
};

 //Update a sender
 const Update =(request, response) => { 
    
    var p_id_type_api = request.body.id_type_api;  
    var p_label = request.body.label;  
    var p_categ_api = request.body.categ_api;  

    db.sequelize.query('SELECT * FROM ctl_type_api_update(:id_type_api , :label , :categ_api) ',

            { replacements: {id_type_api : p_id_type_api , label : p_label , categ_api : p_categ_api }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: type_api,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(type_api => {
            logger.info(type_api)
            response.json(type_api)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });  
};

//Add a sender
const Add =(request, response) => { 
    
    var p_label = request.body.label;  
    var p_categ_api = request.body.categ_api;  

    db.sequelize.query('SELECT * FROM ctl_type_api_add(:label , :categ_api) ',

            { replacements: {label : p_label , categ_api : p_categ_api }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: type_api,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(type_api => {
            logger.info(type_api)
            response.json(type_api)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

module.exports = {
    View,
    Status, 
    Update,
    Add
}