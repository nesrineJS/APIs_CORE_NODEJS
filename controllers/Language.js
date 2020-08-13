const logger = require('../config/logger')
const  db=require('../config/db.config')
const language = db.Language;


// FETCH All language
const View = (request, response) => {
    language.findAll().then(language => {
        response.json(language)
        logger.info(language)

    }).catch(err => {
        logger.error(err);
        res.status(500).json({msg: "error", details: err});
    });
};


//Add  a language
const Add =(request, response) => {

    console.log(request.body)
    
    var p_id_language = request.body.id_language; 
    var p_label = request.body.label; 
    var p_description = request.body.description;


    console.log("----------------------");
    console.log(p_id_language);
    console.log("----------------------");
    console.log("----------------------");
    console.log(p_label);
    console.log("----------------------");
    console.log("----------------------");
    console.log(p_description);
    console.log("----------------------");


    db.sequelize.query('SELECT * FROM ctl_language_add(:id_language,:label,:description) ',

           { replacements: { id_language: p_id_language,label:p_label,description:p_description}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: language,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(language => {
            logger.info(language)
            response.json(language)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};


//Update a language status
 const Status =(request, response) => { 
    
    var p_id_language = request.body.id_language;    
    
    db.sequelize.query('SELECT * FROM ctl_language_status(:id_language) ',

            { replacements: {  id_language: p_id_language}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: language,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(language => {
            logger.info(language)
            response.json(language)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

module.exports = {
    View,
    Status,
    Add,
   
}
