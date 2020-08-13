
module.exports = (sequelize,Sequelize) => {
    const Solde = sequelize.define('solde', {
        id_solde: {
             type: Sequelize.INTEGER, 
             autoIncrement: true ,
             primaryKey: true
        },
        id_devise: {
            type: Sequelize.STRING
        },
        id_developer: {
            type: Sequelize.INTEGER
        },
        solde: {
            type: Sequelize.INTEGER,
        },
        entry_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 
        },
        
        id_module: {
            type: Sequelize.INTEGER
        },
        prefix : {
            type: Sequelize.INTEGER
        },
        nbr_sms :{
            type: Sequelize.INTEGER

        },
        id_app_api :{
            type: Sequelize.INTEGER

        }
      

    },
    {
        timestamps: false, //pour annuler les autre column
        paranoid: false,
        // This is the column name of the referenced models
      //  key: 'id_module',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    });
    

    return Solde;
}
