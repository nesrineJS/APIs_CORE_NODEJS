module.exports = function(app) {
    const language = require('../controllers/Language');
    const verifyToken= require('../config/VerifyToken')
    // View all languages
    app.get('/core/language',verifyToken,language.View);

    // Add a language    
    app.put('/core/language/add/',verifyToken, language.Add);
    /*
    {
	"id_language":"ruby",
	"label":"rubyonrails",
	"description":"frameworkrubyonrails"
    }
    */

    // Update a language with Status   
    app.put('/core/language/status/', language.Status);
    /*
    {
	"id_language":"php"
    }
    */
}

