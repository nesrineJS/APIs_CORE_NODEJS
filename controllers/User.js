const logger = require('../config/logger')
const  db=require('../config/db.config')
const jwt = require('jsonwebtoken');
const User = db.users;

// Add a user
const Add =(request, response) => {  
    var p_login= request.body.login;  
    var p_name = request.body.name;  
    var p_email = request.body.email;  
    var p_password = request.body.password;  
    var p_mobile = request.body.mobile ; 
    var p_entry_user=request.body.entry_user ;
    var p_edit_user= request.body.edit_user;
    var p_role=request.body.role;
    var p_module_set=request.body.module_set;
    
    db.sequelize.query('SELECT * FROM ctl_user_add(:login , :name , :email ,:password, :mobile  , :entry_user , :edit_user , :role , :module_set ) ',

           { replacements: { login: p_login, name: p_name,email: p_email, password:p_password, mobile: p_mobile,entry_user:p_entry_user,edit_user:p_edit_user,role:p_role,module_set:p_module_set}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: User,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(User => {
            logger.info(User)
            response.json(User)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};


 // FETCH by citeria
 const ViewByCriteria = (request, response) => {
    var role = request.body.role ;    
    var keyword = request.body.keyword;    

    console.log('role'+role);
    console.log('keyword'+keyword);


    db.sequelize.query('SELECT * FROM ctl_user_viewbycriteria(:keyword,:role) ',

            { replacements: {  role: role,keyword:keyword}, type: db.sequelize.QueryTypes.SELECT }
            ,{
                model: User,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(User => {
            logger.info(User)
            response.json(User)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
    
};

// Update by login
const Update =(request, response) => { 
    var p_login= request.body.login;  
    var p_name = request.body.name;  
    var p_email = request.body.email;  
    var p_password = request.body.password;  
    var p_mobile = request.body.mobile ; 
    var p_entry_user=request.body.entry_user ;
    var p_edit_user= request.body.edit_user;
    var p_role=request.body.role;
    var p_module_set=request.body.module_set;
    
    db.sequelize.query('SELECT * FROM ctl_user_add(:login , :name , :email ,:password, :mobile  , :entry_user , :edit_user , :role , :module_set ) ',

           { replacements: { login: p_login, name: p_name,email: p_email, password:p_password, mobile: p_mobile,entry_user:p_entry_user,edit_user:p_edit_user,role:p_role,module_set:p_module_set}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: User,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(User => {
            logger.info(User)
            response.json(User)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};
const Authenticate =(request, response) => { 
    var p_login= request.body.login;  
    var p_password =request.body.password
    
    db.sequelize.query('SELECT * FROM ctl_user_authenticate(:login,:password) ',

           { replacements: { login: p_login, password:p_password}, type: db.sequelize.QueryTypes.SELECT }
           , {
                model: User,
                mapToModel: true // pass true here if you have any mapped fields
        }).then(User => {
            logger.info(User)
            response.json(User)
        }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
   
};
const ChekAuthentication =(request, response) => {

    var p_email = request.body.email;
    var p_password= request.body.password
    var p_token= request.body.token


    db.sequelize.query('SELECT * FROM ctl_user_authentication_check(:email,:password,:token) ',

        { replacements: { password: p_password, email:p_email,token: p_token
            }, type: db.sequelize.QueryTypes.SELECT ,raw : true},
        {
            model: User,
            mapToModel: true // pass true here if you have any mapped fields

        }).then(User => {

        if(User)
        {
            var token = jwt.sign({ id:User.length+1234569}, process.env.TOKEN_SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
        }

        // response.json(developer_authentication)
        response.send({User,"x_access_token":token})
        console.log(token)
    }).catch(err => {
        logger.error(err)
        response.status(500).json({msg: "error", details: err});
    });

};
const ChekToken =(request, response) => {
    //A verifier avec amine
        var p_email = request.body.email;
        var p_token = request.body.token;
    
        db.sequelize.query('SELECT * FROM ctl_user_token(:email,:token) ',
    
            { replacements: { email: p_email,token: p_token}, type: db.sequelize.QueryTypes.SELECT },
            {
                model: User,
                mapToModel: true // pass true here if you have any mapped fields
            }).then(User => {
            logger.info(User)
            response.json(User)
        }).catch(err => {
            logger.error(err)
            response.status(500).json({msg: "error", details: err});
        });
    
    };
    const status =(request, response) => {
        //A verifier avec amine
            var p_login = request.body.login;
        
            db.sequelize.query('SELECT * FROM ctl_user_status(:login) ',
        
                { replacements: { login: p_login}, type: db.sequelize.QueryTypes.SELECT },
                {
                    model: User,
                    mapToModel: true // pass true here if you have any mapped fields
                }).then(User => {
                logger.info(User)
                response.json(User)
            }).catch(err => {
                logger.error(err)
                response.status(500).json({msg: "error", details: err});
            });
        
        };
        const ViewByLogin =(request, response) => {
            //A verifier avec amine
                var p_login = request.body.login;
            
                db.sequelize.query('SELECT * FROM ctl_user_viewbyLogin(:login) ',
            
                    { replacements: { login: p_login}, type: db.sequelize.QueryTypes.SELECT },
                    {
                        model: User,
                        mapToModel: true // pass true here if you have any mapped fields
                    }).then(User => {
                    logger.info(User)
                    response.json(User)
                }).catch(err => {
                    logger.error(err)
                    response.status(500).json({msg: "error", details: err});
                });
            
            };

module.exports = {
    Add,
    ViewByCriteria,
    Update,
    Authenticate,
    ChekToken,
    ChekAuthentication,
    status,
    ViewByLogin


    

}