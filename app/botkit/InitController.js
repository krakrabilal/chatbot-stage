var Botkit = require('botkit');
var facebookConfig = require('../../configs/facebook');
var initFacebookController = function (access_page_token) {
    return Botkit.facebookbot({
        access_token: access_page_token,
        verify_token: facebookConfig.webhook_token,
    })
}


module.exports = {
    initFacebookController
}