const logger = require('../config/logger')
const  db=require('../config/db.config')
const developer_authentication = db.developerAuthentication;
const jwt = require('jsonwebtoken');



//View  a developerAuthentication type
const View =(request, response) => {

    var p_id_developer = request.body.id_developer;

    db.sequelize.query('SELECT * FROM ctl_developer_authentication_view_type(:id_developer) ',

        { replacements: { id_developer: p_id_developer}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: developer_authentication,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(developer_authentication => {
        logger.info(developer_authentication)
        response.json(developer_authentication)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};


//Add  a developerAuthentication
const Add =(request, response) => {

    var p_id_developer = request.body.id_developer;
    var p_id_type_auth = request.body.id_type_auth;
    var p_last_date = request.body.last_date;
    var p_email = request.body.email;
    var p_mobile = request.body.mobile;
    var p_uid = request.body.uid;
    var p_token = request.body.token;
    var p_param1 = request.body.param1;
    var p_param2 = request.body.param2;

    db.sequelize.query('SELECT * FROM ctl_developer_authentication_add(:id_developer,:id_type_auth,:last_date,:email,:mobile,:uid,:token,:param1,:param2) ',

        { replacements: { id_developer: p_id_developer,id_type_auth:p_id_type_auth,last_date:p_last_date,email:p_email,mobile:p_mobile,uid:p_uid,token:p_token,param1:p_param1,param2:p_param2}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: developer_authentication,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(developer_authentication => {
        logger.info(developer_authentication)
        response.json(developer_authentication)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};


//Add  a developerAuthentication by social
const AddSocial =(request, response) => {

    var p_firstname = request.body.firstname;
    var p_lastname = request.body.lastname;
    var p_mobile = request.body.mobile;
    var p_username = request.body.username;
    var p_id_country = request.body.id_country;
    var p_email = request.body.email;
    var p_address = request.body.address;
    var p_company = request.body.company;
    var p_birthday_date = request.body.birthday_date;
    var p_profile_picture = request.body.profile_picture;
    var p_password = request.body.password;
    var p_id_devise = request.body.id_devise;
    var p_sexe = request.body.sexe;
    var p_id_type_auth = request.body.id_type_auth;
    var p_uid = request.body.uid;
    var p_token = request.body.token;
    var p_param1 = request.body.param1;
    var p_param2 = request.body.param2;

    db.sequelize.query('SELECT * FROM ctl_developer_add_by_social(:firstname,:lastname,:mobile,:username,:id_country,:email,:address,:company,:birthday_date, :profile_picture, :password ,:id_devise, :sexe, :id_type_auth ,:uid, :token, :param1 ,:param2) ',

        { replacements: { firstname: p_firstname,lastname: p_lastname,mobile:p_mobile,
                username:p_username, id_country:p_id_country, email:p_email, address:p_address,company:p_company, birthday_date: p_birthday_date,
                profile_picture:p_profile_picture, password:p_password, id_devise:p_id_devise, sexe:p_sexe,id_type_auth:p_id_type_auth,
                uid:p_uid, token:p_token, param1:p_param1, param2:p_param2}, type: db.sequelize.QueryTypes.SELECT ,raw : true},
        {
            model: developer_authentication,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(developer_authentication => {

        if(developer_authentication)
        {
            var token = jwt.sign({ id:developer_authentication[0].id_developer}, process.env.TOKEN_SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
        }
        // response.json(developer_authentication)
        response.send({developer_authentication,"x_access_token":token})
        console.log(token)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};

//Update a developerAuthentication'status
const Status =(request, response) => {

    var p_id_developer = request.body.id_developer;
    var p_id_type_auth = request.body.id_type_auth;

    db.sequelize.query('SELECT * FROM ctl_developer_authentication_status(:id_developer,:id_type_auth) ',

        { replacements: { id_developer: p_id_developer,id_type_auth:p_id_type_auth}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: developer_authentication,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(developer_authentication => {
        logger.info(developer_authentication)
        response.json(developer_authentication)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};


//Update a developerAuthentication'status
const GenerateToken =(request, response) => {

    var p_id_developer = request.body.id_developer;
    var p_id_type_auth = request.body.id_type_auth;

    db.sequelize.query('SELECT * FROM ctl_application_authenticate_token(:id_developer,:id_type_auth) ',

        { replacements: { id_developer: p_id_developer,id_type_auth:p_id_type_auth}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: developer_authentication,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(developer_authentication => {
        logger.info(developer_authentication)
        response.json(developer_authentication)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};



const ChekToken =(request, response) => {
//A verifier avec amine
    var p_id_developer = request.body.id_developer;
    var p_token = request.body.token;

    db.sequelize.query('SELECT * FROM ctl_developer_authentication_token(:id_developer,:token) ',

        { replacements: { id_developer: p_id_developer,token: p_token}, type: db.sequelize.QueryTypes.SELECT },
        {
            model: developer_authentication,
            mapToModel: true // pass true here if you have any mapped fields
        }).then(developer_authentication => {
        logger.info(developer_authentication)
        response.json(developer_authentication)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};
const ChekSocial =(request, response) => {

    var p_type_auth = request.body.id_type_auth;
    var p_email = request.body.email;
    var p_uid= request.body.uid
    var p_token= request.body.token


    db.sequelize.query('SELECT * FROM ctl_developer_authentication_check(:id_type_auth,:email,:uid,:token) ',

        { replacements: { id_type_auth: p_type_auth, email:p_email,uid:p_uid,token: p_token
            }, type: db.sequelize.QueryTypes.SELECT ,raw : true},
        {
            model: developer_authentication,
            mapToModel: true // pass true here if you have any mapped fields

        }).then(developer_authentication => {

        if(developer_authentication)
        {
            var token = jwt.sign({ id:developer_authentication[0].id_developer}, process.env.TOKEN_SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
        }

        // response.json(developer_authentication)
        response.send({developer_authentication,"x_access_token":token})
        console.log(token)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};

module.exports = {

    Status,
    Add,
    AddSocial,
    ChekToken,
    ChekSocial,
    View,
    GenerateToken
}
