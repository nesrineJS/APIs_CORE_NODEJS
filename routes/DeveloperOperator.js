module.exports = function(app) {
    const developerOperator = require('../controllers/DeveloperOperator');

    // Update a developerOperator'status   
    app.put('/core/developerOperator/status/', developerOperator.Status);
    /*
    {
	"id_dev_operator":5
    }
    */

    // Add a developerOperator
    app.put('/core/developerOperator/addOrUpdate/', developerOperator.Add);
    /*
    {
	"id_developer":1,
	"prefix":2162,
	"price":"3.5"
    }
    */

    // View a developerOperator By developer
    app.put('/core/developerOperator/viewbydeveloper/', developerOperator.ViewByDeveloper);
    /*
    {
	"id_dev":1,
	"prefix":2162
    }
    */
}

