module.exports = function(app) {
    require('./Country')(app);
    require('./Historic')(app);
    require('./Sender')(app);
    require('./TypeApi')(app);
    require('./ApplicationApi')(app);
    require('./ApplicationShare')(app);
    require('./Application')(app);
    require('./Oauth.js')(app);
    require('./TypeAuthentication')(app);
    require('./Api')(app);
    require('./Language')(app);
    require('./Notification')(app);
    require('./DeveloperOperator')(app);
    require('./Developer')(app);
    require('./Module')(app);
    require('./Devise')(app);
    require('./Operator')(app);
    require('./User')(app);
    require('./Solde')(app);
    require('./SmsMt')(app);
    require('./ApiLanguage')(app);
    require('./DeveloperNotification')(app);
    require('./DeveloperAuthentication')(app);
    require('./LogoApi')(app);


    require('./Routes_amal')(app);
    require('./Routes_Fehmi')(app);
    require('./Routes_Nessrine')(app);

    }

