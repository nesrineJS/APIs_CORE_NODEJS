module.exports = (sequelize, Sequelize) => {
const TypeAuthentication = sequelize.define('type_authentication', {
        id_type_auth: {type: Sequelize.INTEGER, primaryKey: true},
        libelle: Sequelize.STRING,
        status:Sequelize.INTEGER,
        entry_user:Sequelize.STRING,
        entry_date:Sequelize.DATE
    },
    {
        timestamps: false, //pour annuler les autre column
        paranoid: false,
        // This is the column name of the referenced models
        key: 'id_type_auth',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    });
return TypeAuthentication;
}