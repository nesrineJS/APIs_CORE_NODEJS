const logger = require('../config/logger')
const db=require('../config/db.config')
const Solde = db.solde;
//Add an solde
const Add =(request, response) => {
    var p_id_devise =request.body.id_devise;
    var p_id_developer =request.body.id_developer;
    var p_solde =request.body.solde;
    var p_id_module =request.body.id_module;
    var p_prefix =request.body.prefix;
    var p_nbr_sms =request.body.nbr_sms;
    var p_id_app_api =request.body.id_app_api;


    db.sequelize.query('SELECT * FROM ctl_solde_add(:id_devise,:id_developer,:solde,:id_module,:prefix,:nbr_sms,:id_app_api) ',

        { replacements: {id_devise:p_id_devise,id_developer:p_id_developer,solde:p_solde,id_module:p_id_module,prefix:p_prefix,nbr_sms:p_nbr_sms,id_app_api:p_id_app_api}, type: db.sequelize.QueryTypes.SELECT }
        , {
            model: Solde,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(Solde => {
        logger.info(Solde)
        response.json(Solde)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};
const Sum =(request, response) => {
    var p_id_developer=request.body.id_developer ;
    var p_id_devise =request.body.id_devise;

    db.sequelize.query('SELECT ctl_solde_sum as sum FROM ctl_solde_sum(:id_developer,:id_devise) ',

        { replacements: {id_developer:p_id_developer,id_devise:p_id_devise }, type: db.sequelize.QueryTypes.SELECT }
        , {
            model: Solde,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(function(count){
        console.log(count); // It's show the result of query
        response.json(count)
        response.end();
    }).catch(err => {
        console.log("FAFMI");
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });
    /* .then(Solde => {
    console.log(response.body);
    logger.info(JSON.stringify(response.body.JSON))
    response.json(Solde)
    })*/

};
// view a solde by a criteria
const ViewByDeveloper = (request, response) => {
    var p_id_developer= request.body.id_developer;

    db.sequelize.query('SELECT * FROM ctl_solde_viewbydeveloper(:id_developer) ',

        { replacements: { id_developer:p_id_developer }, type: db.sequelize.QueryTypes.SELECT }
        ,{
            model: Solde,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(Solde => {
        logger.verbose(Solde)
        response.json(Solde)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};
const Credit = (request, response) => {
    var p_id_developer =request.body.id_developer;
    var p_begin_date =request.body.p_begin_date;
    var p_end_date =request.body.p_end_date;

    db.sequelize.query('SELECT * FROM ctl_solde_credit(:id_developer,:p_begin_date,:p_end_date) ',

        { replacements: { id_developer:p_id_developer,p_begin_date:p_begin_date,p_end_date:p_end_date}, type: db.sequelize.QueryTypes.SELECT }
        ,{
            model: Solde,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(Solde => {
        logger.info(Solde)
        response.json(Solde)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};
const Debit = (request, response) => {

    var p_id_developer =request.body.id_developer;
    var begin_date = request.body.begin_date;
    var end_date = request.body.end_date;

    console.log("this is begin date!!");

    console.log(begin_date);

    db.sequelize.query('SELECT * FROM ctl_solde_debit(:id_developer,:begin_date,:end_date) ',

        { replacements: { id_developer:p_id_developer, begin_date:begin_date,end_date:end_date }, type: db.sequelize.QueryTypes.SELECT }
        ,{
            model: Solde,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(Solde => {
        logger.info(Solde)
        response.json(Solde)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};


// view a solde by application
const ViewByApplication = (request, response) => {

    console.log("----------------------");
    console.log(request.body);
    console.log("----------------------");

    var p_id_developer= request.body.id_developer;
    var p_id_app = request.body.id_app;
    var p_begin_date = request.body.begin_date;
    var p_end_date = request.body.end_date;

    console.log("----------------------");
    console.log(p_end_date);
    console.log("----------------------");

    db.sequelize.query('SELECT * FROM ctl_solde_application_view(:id_developer,:id_app,:begin_date,:end_date) ',

        { replacements: { id_developer:p_id_developer, id_app:p_id_app, begin_date:p_begin_date,end_date:p_end_date }, type: db.sequelize.QueryTypes.SELECT }
        ,{
            model: Solde,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(Solde => {
        logger.info(Solde)
        response.json(Solde)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};

// view a solde by applicationApi
const ViewByApplicationApi = (request, response) => {

    console.log(request.body);

    var p_id_app = request.body.id_app;
    var p_id_developer = request.body.id_developer;
    var p_id_app_api = request.body.id_app_api ;
    var p_begin_date = request.body.begin_date;
    var p_end_date = request.body.end_date;

    console.log(p_id_developer);
    console.log(p_id_app);
    console.log(p_id_app_api);

    console.log(p_begin_date);
    console.log(p_end_date);




    db.sequelize.query('SELECT * FROM ctl_solde_application_api_view(:id_app,:id_developer,:id_app_api,:begin_date,:end_date) ',

        { replacements: { id_app: p_id_app, id_developer: p_id_developer,id_app_api: p_id_app_api, begin_date:p_begin_date,end_date:p_end_date }, type: db.sequelize.QueryTypes.SELECT }
        ,{
            model: Solde,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(Solde => {
        logger.verbose(Solde)
        response.json(Solde)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};

// view a solde by a criteria
const SoldeInvoices = (request, response) => {
    var p_id_developer= request.body.id_developer;
    var p_id_solde= request.body.id_solde;

    console.log(p_id_solde)


    db.sequelize.query('SELECT * FROM ctl_solde_invoice(:id_developer, :id_solde) ',

        { replacements: { id_developer: p_id_developer, id_solde: p_id_solde }, type: db.sequelize.QueryTypes.SELECT }
        ,{
            model: Solde,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(Solde => {
        logger.verbose(Solde)
        response.json(Solde)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};



module.exports = {
    Add,
    Sum,
    ViewByDeveloper,
    Debit,
    Credit,
    ViewByApplication,
    ViewByApplicationApi,
    SoldeInvoices

}
