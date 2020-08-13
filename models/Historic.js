module.exports = (sequelize,Sequelize) => {
    const Historic = sequelize.define('historic', {
        id_historic: {
             type: Sequelize.INTEGER, 
             autoIncrement: true ,
             primaryKey: true
        },
        ip : {
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
            defaultValue: Sequelize.NOW 
        },
        map: {
            type: Sequelize.STRING
        },
        param1: {
            type: Sequelize.STRING
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
    

    return Historic;
}

