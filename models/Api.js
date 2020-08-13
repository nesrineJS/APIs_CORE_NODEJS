module.exports = (sequelize, Sequelize) => {
    const Api = sequelize.define('api', {
            id_api: {type: Sequelize.INTEGER, primaryKey: true},
            id_type_api: Sequelize.INTEGER,
            title:Sequelize.STRING,
            status :Sequelize.INTEGER,
            description:Sequelize.STRING,
            body:Sequelize.STRING,
            version:Sequelize.STRING,
            entry_date:Sequelize.DATE,
            edit_date:Sequelize.DATE,
            end_date:Sequelize.DATE,
            logo:Sequelize.STRING,
            url:Sequelize.STRING,
            id_api_master:Sequelize.INTEGER,
        },
        {
            timestamps: false, //pour annuler les autre column
            paranoid: false,
            // This is the column name of the referenced models
            key: 'id_api',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        });
    return Api;
    }