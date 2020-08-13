module.exports = function (app) {
    require('./DeveloperNotification')(app);
    require('./DeveloperAuthentication')(app);
    require('./TypeApplication')(app);
   
}