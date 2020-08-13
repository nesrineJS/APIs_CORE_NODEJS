module.exports = function(app) {
    const solde = require('../controllers/Solde');
    const verifyToken= require('../config/VerifyToken')
 // add a solde
/* {
              "id_devise":"DT",
              "id_developer":79,
              "solde" : 320,
              "id_module" : Null,
              "prefix" : 21699,
              "nbr_sms" : 50,
              "id_app_api" : 22

        }/solde/application/api
      */

    app.put('/core/solde/add/', solde.Add);
    // ------------------get a sum of solde bu developper--------------------
     /* {

              "id_developer":79,
              "id_devise":"DT",

        }
      */
     app.put('/core/solde/sum',verifyToken, solde.Sum);
   //--------------- fetch by developer--------------------------------------
   /*      {
              "id_developer":"1"
           }

   */
     app.put('/core/solde/developer', solde.ViewByDeveloper);
    //--------------- fetch by credit----------------------------------------
    /* {
              "id_developer":"79"
                "p_begin_date":"2018-11-14T16:59:46.605Z",
            "p_end_date":"2018-11-15T16:59:46.605Z"
    }
    */
    app.put('/core/solde/developer/credit',verifyToken, solde.Credit);
     //--------------- fetch by debit-----------------------------------------//
     /*{
            "id_developer":"79",
            "p_begin_date":"2018-11-14T16:59:46.605Z",
            "p_end_date":"2018-11-15T16:59:46.605Z"

         }

     */
     app.put('/core/solde/developer/debit',verifyToken, solde.Debit);

//--------------- view solde by application-----------------------------------------//
    /*{
      "id_developer":"79",
      "id_app":"12",
      "begin_date":"2018-11-14T16:59:46.605Z",
      "end_date":"2018-11-15T16:59:46.605Z"
      }
     */
    app.put('/core/solde/application',verifyToken, solde.ViewByApplication);
//-----------------------------------------------------///
//--------------- view solde by applicationApi-----------------------------------------//
    /*{
      "id_app":"12",
      "id_developer":"79",
      "id_app_api" :"22",
      "begin_date":"2018-11-14T16:59:46.605Z",
      "end_date":"2018-11-15T16:59:46.605Z"
      }
     */
    app.put('/core/solde/application/api',verifyToken, solde.ViewByApplicationApi);
//-----------------------------------------------------///

//--------------- view solde invoices-----------------------------------------//
    /*{
      "id_developer":"122",
      "id_solde" :72
      }
     */
    app.put('/core/solde/invoice',verifyToken, solde.SoldeInvoices);
    }
