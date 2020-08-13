const logger = require('../config/logger')
const  db=require('../config/db.config')
const developer_notification = db.DeveloperNotification;


//search  a developer_notification
const ViewByDeveloper =(request, response) => { 
    
    var p_id_developer = request.body.id_developer ;    
    var p_type_notif = request.body.type_notif;  
    var p_begin_date = request.body.begin_date;  
    var p_end_date= request.body.end_date;  

    db.sequelize.query('SELECT * FROM ctl_developer_notification_viewbydeveloper(:id_developer,:type_notif,:begin_date,:end_date) ',

            { replacements: { id_developer : p_id_developer,type_notif:p_type_notif,begin_date:p_begin_date,end_date:p_end_date}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: developer_notification,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(developer_notification => {
            logger.info(developer_notification)
            response.json(developer_notification)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });

};


 //Update a developer_notification'status
 const Status =(request, response) => { 
    
    var p_id_dev_notif = request.body.id_dev_notif;    
    
    db.sequelize.query('SELECT * FROM ctl_developer_notification_status(:id_dev_notif) ',

            { replacements: { id_dev_notif: p_id_dev_notif}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: developer_notification,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(developer_notification => {
            logger.info(developer_notification)
            response.json(developer_notification)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};


//developer_notification'SMS
const SMS =(request, response) => {

    var p_id_developer = request.body.id_developer;
    var p_begin_date = request.body.begin_date;
    var p_end_date = request.body.end_date;
    var p_status = request.body.status;


    db.sequelize.query('SELECT * FROM ctl_developer_notification_sms(:id_developer, :begin_date , :end_date, :status) ',

        { replacements: { id_developer: p_id_developer, begin_date: p_begin_date, end_date: p_end_date, status: p_status }, type: db.sequelize.QueryTypes.SELECT },
        {
            model: developer_notification,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(developer_notification => {
        logger.info(developer_notification)
        response.json(developer_notification)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};



//developer_notification'Web
const Web =(request, response) => {

    var p_id_developer = request.body.id_developer;
    var p_begin_date = request.body.begin_date;
    var p_end_date = request.body.end_date;
    var p_status = request.body.status;

    db.sequelize.query('SELECT * FROM ctl_developer_notification_web(:id_developer, :begin_date , :end_date, :status) ',

        { replacements: { id_developer: p_id_developer, begin_date: p_begin_date, end_date: p_end_date, status: p_status }, type: db.sequelize.QueryTypes.SELECT },
        {
            model: developer_notification,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(developer_notification => {
        logger.info(developer_notification)
        response.json(developer_notification)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};


//developer_notification notif
const Notify =(request, response) => {

    var p_id_developer = request.body.id_developer;
    var p_status = request.body.status;

    db.sequelize.query('SELECT * FROM ctl_developer_notification_notif(:id_developer,:status) ',

        { replacements: { id_developer: p_id_developer, status: p_status }, type: db.sequelize.QueryTypes.SELECT },
        {
            model: developer_notification,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(developer_notification => {
        logger.info(developer_notification)
        response.json(developer_notification)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};


module.exports = {
   
 
    ViewByDeveloper,
    Status,
    SMS,
    Web,
    Notify

}
