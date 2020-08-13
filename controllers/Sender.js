const logger = require('../config/logger')
const  db=require('../config/db.config')
const sender = db.Sender;

// FETCH All senders
const View = (request, response) => {
    sender.findAll().then(sender => {
        response.json(sender)
        logger.info(sender)

    }).catch(err => {
        logger.error(err);
        res.status(500).json({msg: "error", details: err});
    });
};

// fetch by developer
const ViewByDeveloper =(request, response) => {
    console.log("----------------------");
    console.log(request.body);
    console.log("----------------------");


    //var sender = request.body.sender;
    var id_developer =  request.body.id_developer;


    console.log("-------***--------");
    console.log(id_developer);
    console.log("--------***------------");



    db.sequelize.query('SELECT * FROM ctl_sender_viewbydeveloper(:id_developer ) ',

            { replacements: { id_developer : id_developer }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: sender,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(sender => {
            logger.info(sender)
            response.json(sender)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
};

 //Update a status sender
const Status =(request, response) => { 
    
    var p_sender = request.body.sender;    
    var p_id_developer = request.body.id_developer;  
    
    db.sequelize.query('SELECT * FROM ctl_sender_status(:sender,:id_developer ) ',

            { replacements: { sender: p_sender,id_developer : p_id_developer }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: sender,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(sender => {
            logger.info(sender)
            response.json(sender)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });  
};


//Add a sender
const Add =(request, response) => {

    console.log(request.body);
    console.log('*******************');


    var p_sender = request.body.sender;
    var p_id_developer = request.body.id_developer;

    console.log(p_sender);
    console.log(p_id_developer)


    db.sequelize.query('SELECT * FROM ctl_sender_add(:id_developer, :sender ) ',

        { replacements: { id_developer : p_id_developer, sender: p_sender }, type: db.sequelize.QueryTypes.SELECT }
        ,{
            model: sender,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(sender => {
        logger.info(sender)
        response.json(sender)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });
};


module.exports = {
    View,
    ViewByDeveloper,
    Status,
    Add
}
