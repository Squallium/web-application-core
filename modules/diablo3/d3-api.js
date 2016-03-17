/**
 * Created by borja on 9/3/16.
 */

var auth = require('../../config/auth');
var request = require('request');
var util = require('util');


var CAREER_URL = "https://%s.api.battle.net/d3/profile/%s/?locale=%s&apikey=%s"

module.exports = {

    /*
     * EXAMPLE: https://eu.api.battle.net/d3/profile/squallium-2579/?locale=en_GB&apikey=appkey
     */
    careerProfile : function(zone, battleTag, locale) {
        var url = util.format(CAREER_URL, zone, battleTag, locale, auth.diablo3Auth.appKey);

        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body) // Show the HTML for the Google homepage.
            }else{
                console.log("error del demonio");
            }
        });
    },

}
