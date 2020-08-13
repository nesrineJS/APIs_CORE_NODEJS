const logger = require('../config/logger')
const  db=require('../config/db.config')
const notification = db.Notification;


// FETCH All notifications
const View = (request, response) => {
    notification.findAll().then(notification => {
        response.json(notification)
        logger.info(notification)

    }).catch(err => {
        logger.error(err);
        res.status(500).json({msg: "error", details: err});
    });
};

//Add  a notification
const Add =(request, response) => { 
    
    var p_label = request.body.label;    
    var p_body = request.body.body; 
    var p_type_notif = request.body.type_notif;   
    var p_notif_from  = request.body.notif_from ;   
    var p_notif_cc = request.body.notif_cc;   
    var p_param1 = request.body.param1 ;   
      
    db.sequelize.query('SELECT * FROM ctl_notification_add(:label,:body,:type_notif,:notif_from,:notif_cc,:param1) ',

         { replacements: { label: p_label,body:p_body,type_notif:p_type_notif,notif_from:p_notif_from,notif_cc:p_notif_cc,param1:p_param1}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: notification,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(notification => {
            logger.info(notification)
            response.json(notification)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};


 //Update a notification's status
const Status =(request, response) => { 
    
    var p_id_notif = request.body.id_notif;     
    
    db.sequelize.query('SELECT * FROM ctl_notification_status(:id_notif) ',

            { replacements: {  id_notif: p_id_notif}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: notification,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(notification => {
            logger.info(notification)
            response.json(notification)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

//Update a notification
const Update =(request, response) => { 
    
    var p_id_notif = request.body.id_notif;  
    var p_label = request.body.label;  
    var p_body = request.body.body;  
    var p_type_notif = request.body.type_notif;  
    var p_notif_from = request.body.notif_from;  
    var p_notif_cc = request.body.notif_cc;  
    var p_param1 = request.body.param1;  
   
    db.sequelize.query('SELECT * FROM ctl_notification_update(:id_notif,:label,:body,:type_notif,:notif_from,:notif_cc,:param1) ',

           { replacements: { id_notif: p_id_notif, label: p_label,body:p_body,type_notif: p_type_notif, notif_from: p_notif_from,notif_cc:p_notif_cc,param1: p_param1}, type: db.sequelize.QueryTypes.SELECT } , 
           {
                model: notification,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(notification => {
            logger.info(notification)
            response.json(notification)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

//search  a notification
const ViewByCriteria =(request, response) => { 
    
    var p_keyword = request.body.keyword;    
    var p_type_notif = request.body.type_notif; 
   
    db.sequelize.query('SELECT * FROM ctl_notification_viewbycriteria(:keyword,:type_notif) ',

            { replacements: { keyword: p_keyword,type_notif:p_type_notif}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: notification,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(notification => {
            logger.info(notification)
            response.json(notification)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });

};

module.exports = {
    View,
    Status,
    Update,
    ViewByCriteria,
    Add
}