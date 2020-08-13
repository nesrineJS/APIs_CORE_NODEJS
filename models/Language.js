module.exports = (sequelize, Sequelize) => {
    const Language = sequelize.define('language', {
        id_language: {type: Sequelize.STRING, primaryKey: true},
        label: Sequelize.STRING,
        description:Sequelize.STRING,
        status :Sequelize.INTEGER,
        entry_date:Sequelize.DATE,
        edit_date:Sequelize.DATE,
     
        },
        {
            timestamps: false, //pour annuler les autre column
            paranoid: false,
            // This is the column name of the referenced models
            key: 'id_language',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        });
    return Language;
    }