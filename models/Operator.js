module.exports = (sequelize,Sequelize) => {
    const Country = sequelize.define('country', {
        id_country: {type: Sequelize.STRING, primaryKey: true},
        label: Sequelize.STRING
    },
        {
            timestamps: false,
            paranoid: false,
            key: 'id_country',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        });
        
     
    
    const Operator = sequelize.define('operator', {
         
        prefix: {
             type: Sequelize.INTEGER, 
            
             primaryKey: true
        },
        label: {
            type: Sequelize.STRING
        },
        id_country: {
            type: Sequelize.STRING
          
        },
        price: {
            type: Sequelize.INTEGER
        },
        entry_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 
        },
        
        status: {
            type: Sequelize.INTEGER,
            defaultValue: Sequelize.INTEGER=1
        },
        entry_user: {
            type: Sequelize.STRING
        },
        length: {
            type: Sequelize.INTEGER,
        },
       
       

    },
    
    {
        timestamps: false, //pour annuler les autre column
        paranoid: false,
        // This is the column name of the referenced models
      //  key: 'id_module',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    });
   
    Operator.belongsTo(Country, {foreignKey: 'operator_fk_id_country',targetKey: 'id_country'})
   

    return Operator;
}

