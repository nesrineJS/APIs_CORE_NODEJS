const logger = require('../config/logger')
const  db=require('../config/db.config')
const api = db.Api;

//View  an Api by criteria
const ViewByCriteria =(request, response) => { 
    
    var p_keyword = request.body.keyword;    
    var p_id_language = request.body.id_language;  
    var p_id_type_api = request.body.id_type_api; 
    var p_categ_api = request.body.categ_api; 
    db.sequelize.query('SELECT * FROM ctl_api_viewbycriteria(:keyword,:id_language,:id_type_api,:categ_api) ',

            { replacements: { keyword: p_keyword,id_language:p_id_language,id_type_api:p_id_type_api,categ_api:p_categ_api}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: api,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(api => {
            logger.info(api)
            response.json(api)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });

};

//View  an Api by criteria
const ApiDetail =(request, response) => {

    console.log(request.body);


    var id_api = request.body.id_api;

    console.log(id_api);


    db.sequelize.query('SELECT * FROM ctl_api_detail(:id_api) ',

        { replacements: {id_api:id_api}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: api,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(api => {
        logger.info(api)
        response.json(api)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};


//Add  an Api
const Add =(request, response) => { 
    
    var p_id_type_api = request.body.id_type_api;    
    var p_title = request.body.title;  
    var p_description = request.body.description;
    var p_body = request.body.body;
    var p_version = request.body.version;
    var p_end_date = request.body.end_date;
    var p_logo = request.body.logo;
    var p_url =request.body.url;
    var p_id_api_master = request.body.id_api_master;
    
    
    db.sequelize.query('SELECT * FROM ctl_api_add(:id_type_api,:title,:description,:body,:version,:end_date,:logo,:url,:id_api_master) ',

         { replacements: { id_type_api: p_id_type_api,title:p_title,description:p_description,body:p_body,version:p_version,end_date:p_end_date,logo:p_logo,url:p_url,id_api_master:p_id_api_master}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: api,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(api => {
            logger.info(api)
            response.json(api)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

//Add  an Api by an admin
/*const AddAdmin =(request, response) => {

    var p_id_type_api = request.body.id_type_api;
    var p_title = request.body.title;
    var p_description = request.body.description;
    var p_body = request.body.body;
    var p_version = request.body.version;
    var p_end_date = request.body.end_date;
    var p_logo = request.body.logo;
    var p_url =request.body.url;
    var p_id_api_master = request.body.id_api_master;


    db.sequelize.query('SELECT * FROM ctl_api_add_admin(:id_type_api,:title,:description,:body,:version,:end_date,:logo,:url,:id_api_master) ',

        { replacements: { id_type_api: p_id_type_api,title:p_title,description:p_description,body:p_body,version:p_version,end_date:p_end_date,logo:p_logo,url:p_url,id_api_master:p_id_api_master}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: api,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(api => {
        logger.info(api)
        response.json(api)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};*/



//Recommendation of language_set
const Recommendation =(request, response) => { 
    
    var p_language_set = request.body.language_set;    
    
    db.sequelize.query('SELECT * FROM ctl_api_recommendation(:language_set) ',

           { replacements: { language_set: p_language_set}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: api,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(api => {
            logger.info(api)
            response.json(api)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};


 //Update an api'status
 const Status =(request, response) => {


    var p_id_api = request.body.id_api;



     db.sequelize.query('SELECT * FROM ctl_api_status(:id_api) ',

            { replacements: { id_api: p_id_api}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: api,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(api => {
            logger.info(api)
            response.json(api)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

//Update an api
const Update =(request, response) => {

    console.log('**/////*****')

    console.log(request.body);

    var id_api = request.body.id_api;
    var id_type_api = request.body.id_type_api;
    var title = request.body.title;
    var description = request.body.description;
    var body = request.body.body;
    var version = request.body.version;
    var end_date = request.body.end_date;
    var logo = request.body.logo;
    var url = request.body.url;
    var id_api_master = request.body.id_api_master;

    console.log('*************')

    console.log(id_type_api)



    db.sequelize.query('SELECT * FROM ctl_api_update(:id_api,:id_type_api,:title,:description,:body,:version,:end_date,:logo,:url,:id_api_master) ',

           { replacements: { id_api: id_api, id_type_api: id_type_api,title: title, description: description,body:body,version: version,end_date:end_date,logo:logo,url:url,id_api_master:id_api_master}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: api,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(api => {
            logger.info(api)
            response.json(api)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

module.exports = {
    Recommendation,
    Status,
    Add,
    ViewByCriteria,
    Update,
    ApiDetail
    //AddAdmin
}
