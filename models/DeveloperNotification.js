module.exports = (sequelize, Sequelize) => {
    const DeveloperNotification = sequelize.define('developer_notification', {
        id_dev_notif: {type: Sequelize.INTEGER, primaryKey: true},
        id_notif: Sequelize.INTEGER,
        id_developer:Sequelize.INTEGER,
        entry_date :Sequelize.DATE,
        view_date:Sequelize.DATE,
        status:Sequelize.INTEGER,
        notif_to:Sequelize.STRING,
        type_notif:Sequelize.STRING,
        body:Sequelize.STRING
        
           
        },
        {
            timestamps: false, //pour annuler les autre column
            paranoid: false,
            // This is the column name of the referenced models
            key: 'id_dev_notif',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        });
    return DeveloperNotification;
    }