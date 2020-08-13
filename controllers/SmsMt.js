const logger = require('../config/logger')
const  db=require('../config/db.config')
const Sms_mt = db.sms_mt;
//Add a sms_mt
const Add =(request, response) => { 
    var p_sms =request.body.sms;
    var p_msisdn =request.body.msisdn;
    var p_sender =request.body.sender;
    var p_id_developer =request.body.id_developer;
    var p_id_app_api =request.body.id_app_api;

    db.sequelize.query('SELECT * FROM ctl_sms_mt_add(:sms,:msisdn,:sender,:id_developer,:id_app_api) ',

           { replacements: {sms:p_sms,msisdn:p_msisdn,sender:p_sender,id_developer:p_id_developer,id_app_api:p_id_app_api}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: Sms_mt,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Sms_mt => {
            logger.info(Sms_mt)
            response.json(Sms_mt)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });

};
// initialisation of asms if it is suspended$
const Init =(request, response) => { 
    var p_id_sms_mt=request.body.id_sms_mt;
    db.sequelize.query('SELECT * FROM ctl_sms_mt_init(:id_sms_mt) ',

           { replacements: {id_sms_mt:p_id_sms_mt}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: Sms_mt,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Sms_mt => {
            logger.info(Sms_mt)
            response.json(Sms_mt)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};
 // view operator by a developper
 const ViewByDevelopper =(request, response) => { 
    var  p_keyword =request.body.p_keyword;
    var p_id_developer =request.body.id_developer;
    var p_id_app =request.body.id_app ;
    var p_id_api =request.body.id_api;
    var p_id_app_api =request.body.id_app_api;    
    var p_dlr_type =request.body.dlr_type;
    var p_prefix =request.body.prefix;
    var p_id_country =request.body.id_country;
    var p_status =request.body.status;
    var p_begin_date =request.body.p_begin_date;
    var p_end_date =request.body.p_end_date;

    db.sequelize.query('SELECT * FROM ctl_sms_mt_viewbydevelopper(:p_keyword,:id_developer,:id_app,:id_api,:id_app_api,:dlr_type,:prefix,:id_country,:status,:p_begin_date,:p_end_date) ',

           { replacements: {p_keyword:p_keyword,id_developer:p_id_developer,id_app:p_id_app,id_api:p_id_api,id_app_api:p_id_app_api,dlr_type:p_dlr_type,prefix:p_prefix,id_country:p_id_country,status:p_status,p_begin_date:p_begin_date,p_end_date:p_end_date}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: Sms_mt,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Sms_mt => {
            logger.info(Sms_mt)
            response.json(Sms_mt)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

// view count by a developper
const ViewByDevelopperCount =(request, response) => {
    var  p_keyword =request.body.p_keyword;
    var p_id_developer =request.body.id_developer;
    var p_id_app =request.body.id_app ;
    var p_id_api =request.body.id_api;
    var p_id_app_api =request.body.id_app_api;
    var p_dlr_type =request.body.dlr_type;
    var p_prefix =request.body.prefix;
    var p_id_country =request.body.id_country;
    var p_status =request.body.status;
    var p_begin_date =request.body.p_begin_date;
    var p_end_date =request.body.p_end_date;


    console.log(p_begin_date)
    console.log(p_end_date)

    db.sequelize.query('SELECT * FROM ctl_sms_mt_viewbydevelopper_count(:p_keyword,:id_developer,:id_app,:id_api,:id_app_api,:dlr_type,:prefix,:id_country,:status,:p_begin_date,:p_end_date) ',

        { replacements: {p_keyword:p_keyword,id_developer:p_id_developer,id_app:p_id_app,id_api:p_id_api,id_app_api:p_id_app_api,dlr_type:p_dlr_type,prefix:p_prefix,id_country:p_id_country,status:p_status,p_begin_date:p_begin_date,p_end_date:p_end_date}, type: db.sequelize.QueryTypes.SELECT }
        , {
            model: Sms_mt,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(Sms_mt => {
        logger.info(Sms_mt)
        response.json(Sms_mt)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};

// view pagination by a developper
const ViewByDevelopperPagination =(request, response) => {
    var  p_keyword =request.body.p_keyword;
    var p_id_developer =request.body.id_developer;
    var p_id_app =request.body.id_app ;
    var p_id_api =request.body.id_api;
    var p_id_app_api =request.body.id_app_api;
    var p_dlr_type =request.body.dlr_type;
    var p_prefix =request.body.prefix;
    var p_id_country =request.body.id_country;
    var p_status =request.body.status;
    var p_begin_date =request.body.p_begin_date;
    var p_end_date =request.body.p_end_date;
    var p_rowspage =request.body.p_rowspage;
    var p_rowslenght =request.body.p_rowslenght;


    db.sequelize.query('SELECT * FROM ctl_sms_mt_viewbydevelopper_pagination(:p_keyword,:id_developer,:id_app,:id_api,:id_app_api,:dlr_type,:prefix,:id_country,:status,:p_begin_date,:p_end_date, :p_rowspage, :p_rowslenght) ',

        { replacements: {p_keyword:p_keyword,id_developer:p_id_developer,id_app:p_id_app,id_api:p_id_api,id_app_api:p_id_app_api,dlr_type:p_dlr_type,prefix:p_prefix,id_country:p_id_country,status:p_status,p_begin_date:p_begin_date,p_end_date:p_end_date, p_rowspage:p_rowspage, p_rowslenght:p_rowslenght}, type: db.sequelize.QueryTypes.SELECT }
        , {
            model: Sms_mt,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(Sms_mt => {
        logger.info(Sms_mt)
        response.json(Sms_mt)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};
 
const ViewByCountry =(request, response) => { 
  
    var p_id_developer =request.body.id_developer;
    var p_id_app =request.body.id_app;
    var p_id_app_api =request.body.id_app_api;    

   
    db.sequelize.query('SELECT * FROM ctl_sms_mt_viewbycountry(:id_developer,:id_app,:id_app_api) ',

           { replacements: {id_developer:p_id_developer,id_app:p_id_app,id_app_api:p_id_app_api}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: Sms_mt,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Sms_mt => {
            logger.info(Sms_mt)
            response.json(Sms_mt)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};
const statbyapplication =(request, response) => { 
    var  p_id_developer =request.body.id_developer
    var p_id_app =request.body.id_app
    var p_id_app_api =request.body.id_app_api
    var p_begin_date =request.body.p_begin_date;
    var p_end_date =request.body.p_end_date;
    
    db.sequelize.query('SELECT * FROM ctl_sms_mt_statbyapplication_agg(:id_developer,:id_app,:id_app_api,:p_begin_date,:p_end_date) ',

           { replacements: {id_developer:p_id_developer,id_app:p_id_app,id_app_api:p_id_app_api,p_begin_date:p_begin_date,p_end_date:p_end_date}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: Sms_mt,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Sms_mt => {
            logger.info(Sms_mt)
            response.json(Sms_mt)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};
 
const statbycountry =(request, response) => { 
    var  p_id_developer =request.body.id_developer
    var p_id_app =request.body.id_app
    var p_id_app_api =request.body.id_app_api
    var p_begin_date =request.body.p_begin_date;
    var p_end_date =request.body.p_end_date;

   
    db.sequelize.query('SELECT * FROM ctl_sms_mt_statbycountry(:id_developer,:id_app,:id_app_api,:p_begin_date,:p_end_date) ',

           { replacements: {id_developer:p_id_developer,id_app:p_id_app,id_app_api:p_id_app_api,p_begin_date:p_begin_date,p_end_date:p_end_date}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: Sms_mt,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Sms_mt => {
            logger.info(Sms_mt)
            response.json(Sms_mt)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};
const statbySmsMt =(request, response) => { 
    var  p_id_developer =request.body.id_developer
    var p_id_app =request.body.id_app
    var p_id_app_api =request.body.id_app_api
    var p_begin_date =request.body.p_begin_date;
    var p_end_date =request.body.p_end_date;
    
  
  
    
    
   
    db.sequelize.query('SELECT * FROM ctl_sms_mt_statbyday(:id_developer,:id_app,:id_app_api,:p_begin_date,:p_end_date) ',

           { replacements: {id_developer:p_id_developer,id_app:p_id_app,id_app_api:p_id_app_api,p_begin_date:p_begin_date,p_end_date:p_end_date}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: Sms_mt,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Sms_mt => {
            logger.info(Sms_mt)
            response.json(Sms_mt)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};
const statbyDlr =(request, response) => { 
    var  p_id_developer =request.body.id_developer
    var p_id_app =request.body.id_app
    var p_id_app_api =request.body.id_app_api
    var p_begin_date =request.body.p_begin_date;
    var p_end_date =request.body.p_end_date;
    
  
  
    
    
   
    db.sequelize.query('SELECT * FROM ctl_sms_mt_statbydlr(:id_developer,:id_app,:id_app_api,:p_begin_date,:p_end_date) ',

           { replacements: {id_developer:p_id_developer,id_app:p_id_app,id_app_api:p_id_app_api,p_begin_date:p_begin_date,p_end_date:p_end_date}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: Sms_mt,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Sms_mt => {
            logger.info(Sms_mt)
            response.json(Sms_mt)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
};

const statbyApi =(request, response) => {
    var  p_id_developer =request.body.id_developer
    var p_id_app =request.body.id_app
    var p_id_app_api =request.body.id_app_api
    var p_begin_date =request.body.p_begin_date;
    var p_end_date =request.body.p_end_date;



    //db.sequelize.query('select '[' || string_agg(cast(nbr_sms as varchar(20)),',') || ']' as data ,'[' || string_agg(cast(entry_date as varchar(30)), ',')|| ']' as entry_date, label, id_app_api from (SELECT * FROM ctl_sms_mt_statbyapi(:id_developer,:id_app,:id_app_api,:p_begin_date,:p_end_date))',



    db.sequelize.query('SELECT * FROM ctl_sms_mt_statbyapi_new_agg(:id_developer,:id_app,:id_app_api,:p_begin_date,:p_end_date) ',

           { replacements: {id_developer:p_id_developer,id_app:p_id_app,id_app_api:p_id_app_api,p_begin_date:p_begin_date,p_end_date:p_end_date}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: Sms_mt,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Sms_mt => {
            logger.info(Sms_mt)
            response.json(Sms_mt)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });

};



const statbyApp =(request, response) => {
    var  p_id_developer =request.body.id_developer
    var p_id_app =request.body.id_app
    var p_id_app_api =request.body.id_app_api
    var p_begin_date =request.body.p_begin_date;
    var p_end_date =request.body.p_end_date;



    //db.sequelize.query('select '[' || string_agg(cast(nbr_sms as varchar(20)),',') || ']' as data ,'[' || string_agg(cast(entry_date as varchar(30)), ',')|| ']' as entry_date, label, id_app_api from (SELECT * FROM ctl_sms_mt_statbyapi(:id_developer,:id_app,:id_app_api,:p_begin_date,:p_end_date))',



    db.sequelize.query('SELECT * FROM ctl_sms_mt_statbyapplication_agg(:id_developer,:id_app,:id_app_api,:p_begin_date,:p_end_date) ',

        { replacements: {id_developer:p_id_developer,id_app:p_id_app,id_app_api:p_id_app_api,p_begin_date:p_begin_date,p_end_date:p_end_date}, type: db.sequelize.QueryTypes.SELECT }
        , {
            model: Sms_mt,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(Sms_mt => {
        logger.info(Sms_mt)
        response.json(Sms_mt)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};
const statbyamount =(request, response) => {

    var  p_id_developer =request.body.id_developer
    var p_id_app =request.body.id_app
    var p_id_app_api =request.body.id_app_api
    var p_begin_date =request.body.p_begin_date;
    var p_end_date =request.body.p_end_date;


    db.sequelize.query('SELECT * FROM ctl_sms_mt_statbyamount_agg(:id_developer,:id_app,:id_app_api,:p_begin_date,:p_end_date) ',

           { replacements: {id_developer:p_id_developer,id_app:p_id_app,id_app_api:p_id_app_api,p_begin_date:p_begin_date,p_end_date:p_end_date}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: Sms_mt,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Sms_mt => {
            logger.info(Sms_mt)
            response.json(Sms_mt)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

module.exports = {
    Add,
    Init,
    ViewByDevelopper,
    ViewByCountry,
    statbyapplication,
    statbycountry,
    statbySmsMt,
    statbyDlr,
    statbyApi,
    ViewByDevelopperCount,
    ViewByDevelopperPagination,
    statbyApp,
    statbyamount
}
