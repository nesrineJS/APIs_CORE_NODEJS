module.exports = (sequelize, Sequelize) => {
    const TypeApplication = sequelize.define('type_application', {
            id_type_app: {type: Sequelize.INTEGER, primaryKey: true},
            label: Sequelize.STRING,
            icone:Sequelize.STRING,
            color:Sequelize.STRING  

        },
        {
            timestamps: false, //pour annuler les autre column
            paranoid: false,
            // This is the column name of the referenced models
            key: 'id_type_app',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        });
    return TypeApplication;
    }