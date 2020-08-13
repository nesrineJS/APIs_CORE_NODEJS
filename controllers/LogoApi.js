const logger = require('../config/logger')
const  db=require('../config/db.config')

const logoApi = db.LogoApi;

// FETCH All logo api
const View = (request, response) => {
    logoApi.findAll().then(logo_api => {
        response.json(logo_api)
        logger.info(logo_api)

    }).catch(err => {
        logger.error(err);
        res.status(500).json({msg: "error", details: err});
    });
};

module.exports = {
    View
}
