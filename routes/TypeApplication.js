module.exports = function(app) {
    const typeApplication = require('../controllers/TypeApplication');
    const verifyToken= require('../config/VerifyToken')
    // View all typeApplications
    app.get('/core/typeApplication',verifyToken, typeApplication.View);

}
