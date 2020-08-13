const logger = require('../config/logger')
const  db=require('../config/db.config')
const Devise = db.devise;

 // FETCH All Modules
 const View =(request, response) => { 
     
    db.sequelize.query('SELECT * FROM ctl_devise_view() ',

            { replacements: {  }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: Devise,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Devise => {
            logger.info(Devise)
            response.json(Devise)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};


 //Update a status of a module
const Status =(request, response) => { 
    var id_devise = request.body.id_devise;   
    db.sequelize.query('SELECT * FROM ctl_devise_status(:p_id_devise) ',

            { replacements: {  p_id_devise:id_devise}, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: Devise,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Devise => {
            logger.info(Devise)
            response.json(Devise)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};
// fetch by role
const ViewById =(request, response) => { 
    var p_id_devise = request.body.id_devise;   
    db.sequelize.query('SELECT * FROM ctl_devise_viewbyid(:id_devise) ',

            { replacements: { id_devise:p_id_devise}, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: Devise,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Devise => {
            logger.info(Devise)
            response.json(Devise)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};
 //Add a devise
 const Add =(request, response) => { 
    var p_id_devise = request.body.id_devise;  
    var p_label = request.body.label;  
    var p_entry_user = request.body.entry_user;  
    var p_taux = request.body.taux;  
    var p_edit_user = request.body.edit_user ;  
    
    db.sequelize.query('SELECT * FROM ctl_devise_add(:id_devise,:label,:entry_user,:taux,:edit_user) ',

           { replacements: { id_devise: p_id_devise, label: p_label,entry_user: p_entry_user, taux: p_taux,edit_user: p_edit_user}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: Devise,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Devise => {
            logger.info(Devise)
            response.json(Devise)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};
//update a devise
const Update =(request, response) => { 
    var p_id_devise = request.body.id_devise;  
    var p_label = request.body.label;  
    var p_entry_user = request.body.entry_user;  
    var p_taux = request.body.taux;  
    var p_edit_user = request.body.edit_user ;  
    
    db.sequelize.query('SELECT * FROM ctl_devise_add(:id_devise,:label,:entry_user,:taux,:edit_user) ',

           { replacements: { id_devise: p_id_devise, label: p_label,entry_user: p_entry_user, taux: p_taux,edit_user: p_edit_user}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: Devise,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Devise => {
            logger.info(Devise)
            response.json(Devise)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

module.exports = {
    View,
    Status,
    ViewById,
    Add,
    Update
}