const logger = require('../config/logger')
const  db=require('../config/db.config')
const type_application = db.TypeApplication;

// FETCH All typeApplication
const View = (request, response) => {
    type_application.findAll().then(type_application => {
        response.json(type_application)
        logger.info(type_application)

    }).catch(err => {typeApplication
        logger.error(err);
        res.status(500).json({msg: "error", details: err});
    });
};

module.exports = {
    View
}
