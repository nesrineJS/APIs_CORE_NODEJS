const logger = require('../config/logger')
const  db=require('../config/db.config')
const developer = db.Developer;


 // View All developers
 const View =(request, response) => { 
    
    db.sequelize.query('SELECT * FROM ctl_developer_view() ',

            { replacements: {  }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: developer,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(developer => {
            logger.info(developer)
            response.json(developer)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};
// developer vieww app list
const ViewAppList =(request, response) => { 
    
    
    db.sequelize.query('SELECT * FROM ctl_developer_view_list_app()',

            { replacements: { }, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: developer,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(developer => {
            logger.info(developer)
            response.json(developer)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};
//Add  a developer
const Add =(request, response) => { 
    
    var p_firstname = request.body.firstname;    
    var p_lastname = request.body.lastname;  
    var p_mobile = request.body.mobile;
    var p_username = request.body.username;
    var p_id_country = request.body.id_country;
    var p_email = request.body.email;
    var p_address = request.body.address;
    var p_company =request.body.company;
    var p_birthday_date = request.body.birthday_date;
    var p_profile_picture = request.body.profile_picture;
    var p_password = request.body.password;
    var p_id_devise = request.body.id_devise;
    var p_sexe = request.body.sexe;
   
    db.sequelize.query('SELECT * FROM ctl_developer_add(:firstname,:lastname,:mobile,:username,:id_country,:email,:address,:company,:birthday_date,:profile_picture,:password,:id_devise,:sexe) ',

         { replacements: { firstname: p_firstname,lastname:p_lastname,mobile:p_mobile,username:p_username,id_country:p_id_country,email:p_email,address:p_address,company:p_company,birthday_date:p_birthday_date,profile_picture:p_profile_picture,password:p_password,id_devise:p_id_devise,sexe:p_sexe}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: developer,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(developer => {
            logger.info(developer)
            response.json(developer)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

 //Update a developer'status
 const Status =(request, response) => { 
    
    var p_id_developer = request.body.id_developer;    
    
    db.sequelize.query('SELECT * FROM ctl_developer_status(:id_developer) ',

            { replacements: { id_developer: p_id_developer}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: developer,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(developer => {
            logger.info(developer)
            response.json(developer)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};

//View  an Developer by criteria
const ViewByCriteria =(request, response) => { 


    console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");

    var p_keyword = request.body.keyword;    
    var p_id_developer = request.body.id_developer;  
    var p_id_country = request.body.id_country; 
    var p_begin_date = request.body.begin_date; 
    var p_end_date = request.body.end_date; 
    db.sequelize.query('SELECT * FROM ctl_developer_viewbycriteria(:keyword,:id_developer,:id_country,:begin_date,:end_date) ',

            { replacements: { keyword: p_keyword,id_developer:p_id_developer,id_country:p_id_country,begin_date:p_begin_date,end_date:p_end_date}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: developer,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(developer => {
            logger.info(developer)
            response.json(developer)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });

};

//Update a developer
const Update =(request, response) => { 
    
    var p_id_developer= request.body.id_developer;  
    var p_firstname = request.body.firstname;  
    var p_lastname = request.body.lastname;  
    var p_mobile = request.body.mobile;  
    var p_username = request.body.username;  
    var p_email  = request.body.email;  
    var p_address = request.body.address; 
    var p_company = request.body.company; 
    var p_website = request.body.website;   
    var p_birthday_date = request.body.birthday_date; 
    var p_password = request.body.password;   
    var p_sexe = request.body.sexe;
    var p_tva = request.body.tva;
    var p_country = request.body.id_country;
    var p_profile_picture = request.body.profile_picture;

    console.log(p_country)



    db.sequelize.query('SELECT * FROM ctl_developer_update(:id_developer,:firstname,:lastname,:mobile,:username,:email,:address,:company,' +
        ':website,:birthday_date,:password,:sexe, :tva, :id_country, :profile_picture) ',

           { replacements: { id_developer: p_id_developer, firstname: p_firstname,
                   lastname: p_lastname, mobile: p_mobile,username:p_username,email: p_email,address:p_address,
                   company:p_company,website:p_website,birthday_date:p_birthday_date,password:p_password,
                   sexe:p_sexe,tva:p_tva, id_country: p_country, profile_picture: p_profile_picture}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: developer,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(developer => {
            logger.info(developer)
            response.json(developer)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};
module.exports = {
    View,
    Status,
    Add,
    ViewByCriteria,
    Update,
    ViewAppList

}
