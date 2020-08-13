const logger = require('../config/logger')
const db=require('../config/db.config')
const application = db.Application;

// fetch by developer
const ViewByDeveloper =(request, response) => {


    console.log(request.body)

    var p_id_developer = request.body.id_developer;
    var p_id_app = request.body.id_app;
    var p_keyword = request.body.keyword;

    console.log('************')
    console.log(p_id_developer)
    console.log(p_id_app)
    console.log(p_keyword)



    db.sequelize.query('SELECT * FROM ctl_application_viewbydeveloper(:id_developer ,:id_app, :keyword) ',

        { replacements: { id_developer : p_id_developer , id_app: p_id_app , keyword :p_keyword}, type: db.sequelize.QueryTypes.SELECT }
        ,{
            model: application,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(application => {
        logger.info(application)
        response.json(application)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });
};

//Update a status of application
const Status =(request, response) => {

    var p_id_app = request.body.id_app;

    db.sequelize.query('SELECT * FROM ctl_application_status(:id_app) ',

        { replacements: {id_app : p_id_app }, type: db.sequelize.QueryTypes.SELECT }
        ,{
            model: application,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(application => {
        logger.info(application)
        response.json(application)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });
};


//Update a mode of application
const Mode =(request, response) => {

    var p_id_app = request.body.id_app;

    db.sequelize.query('SELECT * FROM ctl_application_developer_mode(:id_app) ',

        { replacements: {id_app : p_id_app }, type: db.sequelize.QueryTypes.SELECT }
        ,{
            model: application,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(application => {
        logger.info(application)
        response.json(application)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });
};



//Add an application
const Add =(request, response) => {


    var p_id_developer = request.body.id_developer;
    var p_title = request.body.title;
    var p_description = request.body.description;
    var p_language_set = request.body.language_set;
    var p_url = request.body.url;
    var p_id_type_app = request.body.id_type_app;

    db.sequelize.query('SELECT * FROM ctl_application_add(:id_developer , :title , :description , :language_set, :url, :id_type_app) ',

        { replacements: {id_developer : p_id_developer , title : p_title, description: p_description ,
                language_set : p_language_set, url: p_url, id_type_app: p_id_type_app}, type: db.sequelize.QueryTypes.SELECT }
        ,{
            model: application,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(application => {
        logger.info(application)
        response.json(application)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });
};
//View  an Developer and his apllications and api  by Time
const ViewByKeyTime =(request, response) => { 
    
    var p_id_developer = request.body.id_developer;  
    var p_keyTime = request.body.p_keyTime;    

    
    db.sequelize.query('SELECT * FROM ctl_application_bykeytime(:id_developer,:p_keyTime) ',

            { replacements: { p_keyTime: p_keyTime,id_developer:p_id_developer}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: application,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(application => {
            logger.info(application)
            response.json(application)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });

};


//Update an application
const Update =(request, response) => {

    var p_id_app = request.body.id_app;
    var p_id_developer = request.body.id_developer;
    var p_title = request.body.title;
    var p_description = request.body.description;
    var p_language_set = request.body.language_set;
    var p_url = request.body.url;
    var p_id_type_app = request.body.id_type_app;

    console.log('**********')

    console.log(p_id_type_app)


    db.sequelize.query('SELECT * FROM ctl_application_update(:id_app , :id_developer , :title, :description , :language_set , :url , :id_type_app) ',

        { replacements: {id_app : p_id_app , id_developer : p_id_developer , title : p_title, description : p_description ,
                language_set : p_language_set , url : p_url, id_type_app : p_id_type_app }, type: db.sequelize.QueryTypes.SELECT }
        ,{
            model: application,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(application => {
        logger.info(application)
        response.json(application)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });
};

module.exports = {
    Status,
    Add,
    ViewByDeveloper,
    Update,
    ViewByKeyTime,
    Mode
}
