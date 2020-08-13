const logger = require('../config/logger')
const  db=require('../config/db.config')
const developer_operator = db.DeveloperOperator;


//Add  a developerOperator
const Add =(request, response) => { 
    
    var p_id_developer = request.body.id_developer;    
    var p_prefix = request.body.prefix;  
    var p_price = request.body.price;
    var p_end_date = request.body.end_date;
    
    db.sequelize.query('SELECT * FROM ctl_developer_operator_add(:id_developer,:prefix,:price,:end_date) ',

         { replacements: { id_developer: p_id_developer,prefix:p_prefix,price:p_price,end_date:p_end_date}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: developer_operator,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(developer_operator => {
            logger.info(developer_operator)
            response.json(developer_operator)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};


//search  a developer_operator
const ViewByDeveloper =(request, response) => { 
    
    var p_id_dev = request.body.id_developer ;    
    var p_prefix = request.body.prefix;  

    db.sequelize.query('SELECT * FROM ctl_developer_operator_viewbydeveloper(:id_developer,:prefix) ',

            { replacements: { id_developer : p_id_dev,prefix:p_prefix}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: developer_operator,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(developer_operator => {
            logger.info(developer_operator)
            response.json(developer_operator)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });

};


 //Update a developerOperator'status
 const Status =(request, response) => { 
    
    var p_id_dev_operator = request.body.id_dev_operator;    
    
    db.sequelize.query('SELECT * FROM ctl_developer_operator_status(:id_dev_operator) ',

            { replacements: { id_dev_operator: p_id_dev_operator}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: developer_operator,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(developer_operator => {
            logger.info(developer_operator)
            response.json(developer_operator)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};


module.exports = {
   
    Add,
    ViewByDeveloper,
    Status,

}