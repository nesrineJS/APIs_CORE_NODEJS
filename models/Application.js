module.exports = (sequelize,Sequelize) => {
    const Application = sequelize.define('application', {
        id_app: {
             type: Sequelize.INTEGER, 
             autoIncrement: true ,
             primaryKey: true
        },
        id_developer : {
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: Sequelize.INTEGER=1
        },
        description: {
            type: Sequelize.STRING
        },
        entry_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 

        },
        edit_date: {
            type: Sequelize.DATE
        },
        language_set: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        },
        key: {
            type: Sequelize.STRING
        },    
        id_type_app: {
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
    

    return Application;
}

