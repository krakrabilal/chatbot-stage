var fbmessengerController = require('../app/controllers/FbMessengerController');
module.exports = function (app) {
    app.get('/fb/webhook', fbmessengerController.checktoken);
    app.post('/fb/webhook', fbmessengerController.webhook)
}