module.exports = (sequelize,Sequelize) => {
    const Oauth = sequelize.define('oauth', {
        token: {
            type: Sequelize.STRING, 
            primaryKey: true
        },
        ip: {
            type: Sequelize.STRING
        },
        id_developer: {
            type: Sequelize.INTEGER
        },
        id_app_api: {
            type: Sequelize.INTEGER
        },
        users: {
            type: Sequelize.STRING
        },
        entry_date: {
            type: Sequelize.DATE,
        } ,
        end_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 
        } ,
        status: {
            type: Sequelize.INTEGER,
            defaultValue: Sequelize.INTEGER=1
        },
        info: {
            type: Sequelize.INTEGER
        },
        code: {
            type: Sequelize.INTEGER
        },      
    },
    {
       timestamps: false, 
        paranoid: false,
      
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    },
    {
        freezeTableName: true,
      });

    return Oauth;
}


 