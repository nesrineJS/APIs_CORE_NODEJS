module.exports = (sequelize, Sequelize) => {
    const Notification = sequelize.define('notification', {
            id_notif: {type: Sequelize.INTEGER, primaryKey: true},
            label: Sequelize.STRING,
            body:Sequelize.STRING,
            entry_date:Sequelize.DATE,
            type_notif:Sequelize.STRING,
            notif_from:Sequelize.STRING,
            notif_cc:Sequelize.STRING,
            status:Sequelize.INTEGER,
            param1:Sequelize.STRING,

        },
        {
            timestamps: false, //pour annuler les autre column
            paranoid: false,
            // This is the column name of the referenced models
            key: 'id_notif',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        });
    return Notification;
    }