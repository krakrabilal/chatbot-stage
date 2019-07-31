var facebookconfig = require('../../configs/facebook');
var initBotKit = require('../botkit/InitController');

var checktoken = function (req, res) {
    if (req.query['hub.verify_token'] === facebookconfig.webhook_token) {
        res.send(req.query['hub.challenge']);
    } else {
        res.send('Error, wrong token');
    }
}

var webhook = function (req, res) {
    //res.sendStatus(200);


    const data = req.body;
    console.log('Webhook POST', JSON.stringify(data));

    if (data.object === 'page') {
        // TODO Recuperation du token dans la base de donnée grace à son id dans les parametres du message
        var botkitFbController = initBotKit.initFacebookController(facebookconfig.token_acces_page);
        var bot = botkitFbController.spawn({})
        require('./FbMessengerConversationController')(botkitFbController);
        var message;
        res.sendStatus(200);
        data.entry.forEach((pageEntry) => {

            if (!pageEntry.messaging) {
                return;
            }

            pageEntry.messaging.forEach((messagingEvent) => {

                if (messagingEvent.message) {
                    message = {
                        text: messagingEvent.message.text,
                        user: messagingEvent.sender.id,
                        channel: messagingEvent.sender.id,
                        timestamp: messagingEvent.timestamp,
                        seq: messagingEvent.message.seq,
                        mid: messagingEvent.message.mid,
                        attachments: messagingEvent.message.attachments
                    }
                    botkitFbController.trigger('message_received',[bot,message])
                }

                if (messagingEvent.postback) {

                } else {
                    console.log(
                        'Webhook received unknown messagingEvent: ',
                        messagingEvent
                    );
                }
            });
        });
    }
}


module.exports = {
    checktoken,
    webhook
}