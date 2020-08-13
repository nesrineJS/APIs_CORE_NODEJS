module.exports = (sequelize,Sequelize) => {
    const ApiLanguage = sequelize.define('api_language', {
    
       id_api: {
             type: Sequelize.INTEGER, 
             autoIncrement: true ,
             primaryKey: true
        },
        id_language: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        use: {
            type: Sequelize.INTEGER,
            defaultValue: Sequelize.INTEGER=0
        },
       
        entry_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 
        },
        edit_date:{
            type: Sequelize.DATE,
        }        
    },
    {
        timestamps: false, //pour annuler les autre column
        paranoid: false,
        // This is the column name of the referenced models
      //  key: 'id_module',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    });    

    return ApiLanguage;
}