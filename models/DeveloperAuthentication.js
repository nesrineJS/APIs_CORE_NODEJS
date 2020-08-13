module.exports = (sequelize, Sequelize) => {
    const DeveloperAuthentication = sequelize.define('developer_authentication', {
            id_developer: {type: Sequelize.INTEGER, primaryKey: true},
            id_type_auth: {type: Sequelize.INTEGER, primaryKey: true},
            uid:Sequelize.STRING,
            token :Sequelize.STRING,
            param1:Sequelize.STRING,
            param2:Sequelize.STRING,
            status:Sequelize.INTEGER,
            entry_date:Sequelize.DATE,
            edit_date:Sequelize.DATE,
            last_date :Sequelize.DATE,
            email:Sequelize.STRING,
            mobile:Sequelize.STRING,

        },
        {
            timestamps: false, //pour annuler les autre column
            paranoid: false,
            // This is the column name of the referenced models
            key: ('id_developer', 'id_type_auth'),
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        });
    return DeveloperAuthentication;
    }