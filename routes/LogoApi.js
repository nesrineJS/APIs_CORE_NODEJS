module.exports = function(app) {
    const logoApi = require('../controllers/LogoApi');
    //const verifyToken= require('../config/VerifyToken')
    // View all logo_api
    app.get('/core/logoApi', logoApi.View);

}
