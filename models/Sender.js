module.exports = (sequelize,Sequelize) => {
    const Sender = sequelize.define('sender', {
        sender: {
            type: Sequelize.STRING, 
            primaryKey: true
        },
        id_developer: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
       status: {
            type: Sequelize.INTEGER,
            defaultValue: Sequelize.INTEGER=1
        },
        entry_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 
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
    
    return Sender;
}

