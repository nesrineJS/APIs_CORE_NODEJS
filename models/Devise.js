module.exports = (sequelize,Sequelize) => {
    const Devise = sequelize.define('devise', {
        
        id_devise: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        label: {
            type: Sequelize.STRING
        },
        entry_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 
        },
        entry_user: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.INTEGER,
            defaultValue: Sequelize.INTEGER=1
        },
       
        taux: {
            type: Sequelize.INTEGER
        },
       
        edit_use: {
            type: Sequelize.STRING
        }
       
       
        
       

    },
    {
        timestamps: false, //pour annuler les autre column
        paranoid: false,
        // This is the column name of the referenced models
      //  key: 'id_module',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    });
    

    return Devise;
}
