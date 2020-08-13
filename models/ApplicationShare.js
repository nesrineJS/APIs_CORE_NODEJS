module.exports = (sequelize,Sequelize) => {
    const Application_share = sequelize.define('application_share', {
        id_developer: {
             type: Sequelize.INTEGER, 
             primaryKey: true
        },
        id_app : {
            type: Sequelize.INTEGER
        },
        entry_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 
        },
        edit_date: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: Sequelize.INTEGER=1
        }    
    },
    {
        timestamps: false, 
        paranoid: false,   
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    },
    {
        freezeTableName: true,
      });
    

    return Application_share;
}

