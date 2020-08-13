/***********************************CREATE THE MODEL******************************************/
module.exports = (sequelize, Sequelize) => {
const Country = sequelize.define('country', {
    id_country: {type: Sequelize.STRING, primaryKey: true},
    label: Sequelize.STRING
},
    {
        timestamps: false,
        paranoid: false,
        key: 'id_country',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    });
    
    return Country;
 }