
module.exports = function(app) {
    const api_language = require('../controllers/ApiLanguage');
    const verifyToken = require('../config/VerifyToken')
//-------------- add an api language-------------------------------
     /* {
        "id_api": "20",
        "id_language": "java",
        " use":"1"
    }
    */
    app.put('/core/apiLanguage/add', api_language.Add);
//--------------update user=user+1 and edit date=now()-------------
    /* { 
        "id_api": "11",
        "id_language": "ts",
        "use":"1" 
    }
    */
    app.put('/core/apiLanguage/update', api_language.Update);
//--------------- fetch by cirteria--------------------------------
    /* {  "id_api":"11",
        "id_language":"c#"
    }
    */ 
    app.put('/core/apiLanguage/criteria', api_language.ViewByCriteria);
//----------------increment a use of an api-------------------------
    /* {
        "id_api": "10",
        "id_language": "php"
    }
    */
    app.put('/core/apiLanguage/increment', api_language.Increment);   

}
