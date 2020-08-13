module.exports = (sequelize,Sequelize) => {
    const Application_api = sequelize.define('application_api', {
        id_app_api: {
             type: Sequelize.INTEGER, 
             autoIncrement: true ,
             primaryKey: true
        },
        id_app : {
            type: Sequelize.INTEGER
        },
        id_api: {
            type: Sequelize.INTEGER
        },
        id_developer: {
            type: Sequelize.INTEGER
        },
        key: {
            type: Sequelize.STRING
        },
        expired_key_date: {
            type: Sequelize.DATE,
        },
        label: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: Sequelize.INTEGER=1
        },
        entry_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 
        },
        edit_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 
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
    

    return Application_api;
}

