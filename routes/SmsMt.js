module.exports = function (app) {
    const sms_mt = require('../controllers/SmsMt');
    const verifyToken = require('../config/VerifyToken')
    //--------------- add an sms_mt--------------------
    /* {
            "sms":"nesrine",
            "msisdn":"21697369731",
            "sender":"l2t",
            "id_developer":"1",
            "id_app_api":"7" 
    }
    */
    app.put('/core/smsMt/add', sms_mt.Add);

    //--------- init sms if it is suspended--------------
    /* {
                "id_sms_mt": 3
         }
    */
    app.put('/core/smsMt/init', sms_mt.Init);
    //---------- fectch by  developper-----------------------
    /*  {
                "p_keyword":"21694",
                "id_developer":"2",
                "id_app_api":"7",
                "id_app":"2",
                "dlr_type":"",
                "prefix":"21699",
                "id_country":"tn",
                "p_begin_date":"2018-11-12 00:00:00",
                "p_end_date":"2018-11-14 00:00:00",
                "status":"",
                "id_api":""         
    }

    */

    app.put('/core/smsMt/developper',verifyToken, sms_mt.ViewByDevelopper);

    /*  {
               "p_keyword":"21694",
               "id_developer":"2",
                "id_app":"2",
                "id_api":""
               "id_app_api":"7",
               "dlr_type":"",
               "prefix":"21699",
               "id_country":"tn",
                "status":"",
               "p_begin_date":"2018-11-12 00:00:00",
               "p_end_date":"2018-11-14 00:00:00",
   }

   */

    app.put('/core/smsMt/developper/count',verifyToken, sms_mt.ViewByDevelopperCount);

    /*  {
               "p_keyword":"21694",
               "id_developer":"2",
                "id_app":"2",
                "id_api":""
               "id_app_api":"7",
               "dlr_type":"",
               "prefix":"21699",
               "id_country":"tn",
                "status":"",
               "p_begin_date":"2018-11-12 00:00:00",
               "p_end_date":"2018-11-14 00:00:00",
               "p_rowspage": 2,
               "p_rowslenght":3

   }

   */

    app.put('/core/smsMt/developper/pagination',verifyToken, sms_mt.ViewByDevelopperPagination);

    // fectch nbr_sms and country
    app.put('/core/smsMt/country', sms_mt.ViewByCountry);

    /*
     /*  -------- fectch by  developper-----------------------
         {

                    "id_developer":"80",
                    "id_app_api":"44",
                    "id_app":"13"

        }/*
    */
    app.put('/core/smsMt/statByAmount',verifyToken, sms_mt.statbyamount)
    /*
    {


    "id_developer":"80",
    "id_app":"",
    "id_app_api":"",
    "p_begin_date":"2018-01-01 00:00:01",
    "p_end_date":"2020-11-14 17:11:27"


        }


    */
    app.put('/core/smsMt/statByCountry',verifyToken, sms_mt.statbycountry)
    /*
    {


    "id_developer":"80",
    "id_app":"",
    "id_app_api":"",
    "p_begin_date":"2018-01-01 00:00:01",
    "p_end_date":"2020-11-14 17:11:27"


        }


    */
    app.put('/core/smsMt/statByDay',verifyToken, sms_mt.statbySmsMt)
    /*
    {


    "id_developer":"80",
    "id_app":"",
    "id_app_api":"",
    "p_begin_date":"2018-01-01 00:00:01",
    "p_end_date":"2020-11-14 17:11:27"


        }


    */
    app.put('/core/smsMt/statByDlr',verifyToken, sms_mt.statbyDlr)
    /*
    {


    "id_developer":"80",
    "id_app":"",
    "id_app_api":"",
    "p_begin_date":"2018-01-01 00:00:01",
    "p_end_date":"2020-11-14 17:11:27"


        }


    */
    app.put('/core/smsMt/statByApi',verifyToken, sms_mt.statbyApi)
    /*
    {


    "id_developer":"80",
    "id_app":"13",
    "id_app_api":"",
    "p_begin_date":"2018-01-01 00:00:01",
    "p_end_date":"2020-11-14 17:11:27"


        }


    */


    app.put('/core/smsMt/statByApp',verifyToken, sms_mt.statbyApp)
    /*
    {


    "id_developer":"80",
    "id_app":"13",
    "id_app_api":"",
    "p_begin_date":"2018-01-01 00:00:01",
    "p_end_date":"2020-11-14 17:11:27"


        }


    */
   app.put('/core/smsMt/statByAmount',verifyToken, sms_mt.statbyamount)
    /*
    {


    "id_developer":"122",
    "id_app":"",
    "id_app_api":"",
    "p_begin_date":"2018-01-01 00:00:01",
    "p_end_date":"2020-11-14 17:11:27"


        }


    */

}
