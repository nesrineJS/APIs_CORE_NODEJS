module.exports = function(db, sequelize, Sequelize) {
    db.country = require('./Country')(sequelize, Sequelize);
    db.Historic = require('./Historic')(sequelize, Sequelize);
    db.Sender = require('./Sender')(sequelize, Sequelize);
    db.Type_api = require('./TypeApi')(sequelize, Sequelize);
    db.Application_api= require('./ApplicationApi')(sequelize, Sequelize);
    db.Application_share = require('./ApplicationShare')(sequelize, Sequelize);
    db.Application= require('./Application')(sequelize, Sequelize);
    db.Oauth= require('./Oauth')(sequelize, Sequelize);
    db.TypeAuthentication = require('./TypeAuthentication')(sequelize, Sequelize);
    db.Api = require('./Api')(sequelize, Sequelize);
    db.Language = require('./Language')(sequelize, Sequelize);
    db.Notification = require('./Notification')(sequelize, Sequelize);
    db.DeveloperOperator = require('./DeveloperOperator')(sequelize, Sequelize);
    db.Developer= require('./Developer')(sequelize, Sequelize);
    db.module = require('./Module')(sequelize, Sequelize);
    db.devise =require('./Devise')(sequelize, Sequelize);
    db.operator=require('./Operator')(sequelize, Sequelize);
    db.user=require('./User')(sequelize, Sequelize);
    db.api_language=require('./ApiLanguage')(sequelize, Sequelize);
    db.sms_mt=require('./SmsMt')(sequelize, Sequelize);
    db.solde=require('./Solde')(sequelize, Sequelize);
    db.DeveloperNotification=require('./DeveloperNotification')(sequelize, Sequelize);
    db.DeveloperAuthentication=require('./DeveloperAuthentication')(sequelize, Sequelize);
    db.LogoApi=require('./LogoApi')(sequelize, Sequelize);


    require('./Models_Amal')(db, sequelize, Sequelize);
    require('./Models_Fehmi')(db, sequelize, Sequelize);
    require('./Models_Nessrine')(db, sequelize, Sequelize);
}
