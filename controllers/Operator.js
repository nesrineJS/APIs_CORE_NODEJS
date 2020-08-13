const logger = require('../config/logger')
const  db=require('../config/db.config')
const Operator = db.operator;

 // view operator by a criteria
 const ViewByCriteria = (request, response) => {
    var p_id_country = request.body.id_country ;    
    var p_prefix = request.body.prefix;    
    var p_label = request.body.label; 
    var p_keyword = request.body.p_keyword;    
    db.sequelize.query('SELECT * FROM ctl_operator_viewbycriteria(:p_keyword, :id_country,:prefix,:label) ',

            { replacements: {  id_country: p_id_country,prefix:p_prefix,label:p_label,p_keyword:p_keyword}, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: Operator,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Operator => {
            logger.info(Operator)
            response.json(Operator)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
    
};

// update Operator By prefix
const UpdateByPrefix = (request, response) => {
    var p_prefix = request.body.prefix;    
    var p_price = request.body.price;    
    db.sequelize.query('SELECT * FROM ctl_operator_updatebyprefix(:prefix,:price) ',

            { replacements: {  prefix: p_prefix,price:p_price}, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: Operator,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Operator => {
            logger.info(Operator)
            response.json(Operator)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
    
};
// update operator  price  for a country
const UpdateByCountry = (request, response) => {
    var p_id_country = request.body.id_country ;    
    var p_price = request.body.price;    
    db.sequelize.query('SELECT * FROM ctl_operator_updatebycountry(:id_country,:price) ',

            { replacements: {  id_country: p_id_country,price:p_price}, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: Operator,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Operator => {
            logger.info(Operator)
            response.json(Operator)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });  

    
};
//update status switch betwwen 1 and 0
const Status =(request, response) => { 
    
    var p_prefix = request.body.prefix;    
    
    db.sequelize.query('SELECT * FROM ctl_operator_status(:prefix) ',

            { replacements: {  prefix: p_prefix}, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: Operator,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Operator => {
            logger.info(Operator)
            response.json(Operator)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};


module.exports = {
    ViewByCriteria,
    UpdateByPrefix,
    UpdateByCountry,
    Status



}