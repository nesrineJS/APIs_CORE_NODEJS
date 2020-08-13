module.exports = (sequelize,Sequelize) => {
    const Logo_api = sequelize.define('logo_api', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true ,
                primaryKey: true
            },
            label: {
                type: Sequelize.STRING
            },
            icone: {
                type: Sequelize.STRING
            },
            color: {
                type: Sequelize.STRING
            },
        },
        {
            timestamps: false,
            paranoid: false,
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        });

    return Logo_api;
}
