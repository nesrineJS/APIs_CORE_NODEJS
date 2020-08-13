module.exports = function(app) {
    const operator = require('../controllers/Operator');

     //--------- Update Status of Operator------------
     /*{"prefix":"3396" }
     */
     app.put('/core/operators/status', operator.Status);

     //---------- update by prefix-----------------------
     /*{"prefix":"3396",
        "price":"1.50000"}
     */
     app.put('/core/operators/update/prefix', operator.UpdateByPrefix);

     //--------- update an operator by  country------------------
     /*{"id_country":"tn",
        "price":"1.50000"}
     */
     app.put('/core/operators/update/country', operator.UpdateByCountry);

     //---------- view an operator by criteria----------------------- 
     /*{"p_keyword":"",
        "id_country":"",
	    "prefix":"",
	    "label":""
    }
     */
     app.put('/core/operators/criteria', operator.ViewByCriteria);

    

}
