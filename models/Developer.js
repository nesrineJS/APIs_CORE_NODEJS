module.exports = (sequelize, Sequelize) => {
    const Developer = sequelize.define('developer', {
            id_developer: {type: Sequelize.INTEGER, primaryKey: true},
            firstname: Sequelize.STRING,
            lastname:Sequelize.STRING,
            mobile :Sequelize.STRING,
            username:Sequelize.STRING,
            status:Sequelize.INTEGER,
            id_country:Sequelize.STRING,
            email:Sequelize.STRING,
            address:Sequelize.STRING,
            company :Sequelize.STRING,
            tva:Sequelize.STRING,
            website:Sequelize.STRING,
            birthday_date:Sequelize.DATE,
            profile_picture:Sequelize.STRING,
            password:Sequelize.STRING,
            entry_date:Sequelize.DATE,
            entry_user:Sequelize.STRING,
            edit_user:Sequelize.STRING,
            edit_date:Sequelize.DATE,
            id_devise:Sequelize.STRING,
            sexe:Sequelize.STRING,
            mobile_auth:Sequelize.INTEGER,    
        },
        {
            timestamps: false, //pour annuler les autre column
            paranoid: false,
            // This is the column name of the referenced models
            key: 'id_developer',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        });
    return Developer;
    }