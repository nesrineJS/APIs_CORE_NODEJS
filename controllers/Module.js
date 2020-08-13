const logger = require('../config/logger')
const  db=require('../config/db.config')
const Module = db.module;

 // FETCH All Modules
 const View = (req, res) => {
    Module.findAll().then(module => {
        res.json(module)
        logger.info(module)

    }).catch(err => {
        logger.error(err);
        res.status(500).json({msg: "error", details: err});
    });
};

 //Update a Module
const Status =(request, response) => { 
    
    var p_id_module = request.body.id_module;    
    db.sequelize.query('SELECT * FROM ctl_module_status(:id_module) ',

            { replacements: {  id_module: p_id_module}, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: Module,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Module => {
            logger.info(Module)
            response.json(Module)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};
// fetch by role
const ViewByRole =(request, response) => { 
    var p_role = request.body.role_set;    
    
    db.sequelize.query('SELECT * FROM ctl_module_viewbyrole(:role_set) ',

            { replacements: {  role_set: p_role}, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: Module,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(Module => {
            logger.info(Module)
            response.json(Module)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

module.exports = {
    View,
    Status,
    ViewByRole
}