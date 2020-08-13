module.exports = (sequelize,Sequelize) => {
    const Type_api = sequelize.define('type_api', {
        id_type_api: {
             type: Sequelize.INTEGER, 
             autoIncrement: true ,
             primaryKey: true
        },
        label: {
            type: Sequelize.STRING
        },
        entry_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: Sequelize.INTEGER=1
        },
        categ_api: {
            type: Sequelize.INTEGER
        },  
    },
    {
        timestamps: false, 
        paranoid: false,
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    });
    
    return Type_api;
}
