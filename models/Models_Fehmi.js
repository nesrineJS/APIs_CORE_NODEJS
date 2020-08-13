module.exports = function(db, sequelize, Sequelize) {

    db.TypeApplication = require('./TypeApplication')(sequelize, Sequelize);
}