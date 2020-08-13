module.exports = function(app) {

    const sender =require('../controllers/Sender');
    const verifyToken= require('../config/VerifyToken')
/*Format json
    {
        "id_developer": 1,
        "sender": "83500"
   } */
    // Retrieve all senders
    app.get('/core/sender',verifyToken, sender.View);

    /*Format json
    {
       "sender": "83500",
       "id_developer": 1
}*/

    // Update a sender with Status   
    app.put('/core/sender/status/',verifyToken, sender.Status);

       /*Format json
    {
       "id_developer": "",
       "sender": "3"
 }*/
 
    // view by developer
    app.put('/core/sender/dev/',verifyToken, sender.ViewByDeveloper);




    /*Format json
    {
      "sender": "",
      "id_developer":
    }*/
//  Add a sender
app.put('/core/sender/add/',verifyToken, sender.Add);
}
