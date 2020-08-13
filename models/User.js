module.exports = (sequelize,Sequelize) => {
    const User = sequelize.define('users', {
       
        login: {
            type: Sequelize.STRING, 
            primaryKey: true
       },
       name: {
           type: Sequelize.STRING
       },
       email: {
           type: Sequelize.STRING
       },
       password: {
           type: Sequelize.STRING
       },
       mobile: {
           type: Sequelize.STRING
       },
       entry_user: {
           type: Sequelize.STRING
       },
       entry_user: {
           type: Sequelize.STRING
       },
       edit_user:{
           type: Sequelize.STRING

       },
       role:{
           type: Sequelize.STRING

       },
       status: {
           type: Sequelize.INTEGER,
           defaultValue: Sequelize.INTEGER=1
       },
       entry_date: {
           type: Sequelize.DATE,
           defaultValue: Sequelize.NOW 
       },
       edit_date: {
           type: Sequelize.DATE,
         
       },
       module_set:{
           type: Sequelize.STRING

       }
       

    },
    {
        timestamps: false, //pour annuler les autre column
        paranoid: false,
        // This is the column name of the referenced models
      //  key: 'id_module',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    });

    return User;
}