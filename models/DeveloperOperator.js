module.exports = (sequelize, Sequelize) => {
    const DeveloperOperator = sequelize.define('developer_operator', {
            id_dev_operator: {type: Sequelize.INTEGER, primaryKey: true},
            id_developer: Sequelize.INTEGER,
            prefix:Sequelize.INTEGER,
            status :Sequelize.INTEGER,
            price:Sequelize.INTEGER,
            entry_date:Sequelize.DATE,
            end_date:Sequelize.DATE
           
        },
        {
            timestamps: false, //pour annuler les autre column
            paranoid: false,
            // This is the column name of the referenced models
            key: 'id_dev_operator',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        });
    return DeveloperOperator;
    }