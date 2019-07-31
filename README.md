### Prerequisites
* Node v7.4 or later ([https://nodejs.org/en/download/](https://nodejs.org/en/download/))
* Heroku CLI ([https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli))
* Facebook developers account ([https://developers.facebook.com](https://developers.facebook.com) )


####  Configuration du bot clicseller
##### exécuter les commandes suivantes : 
```bash
$ git clone https://gitlab.com/inpulsion-ci/clicseller/clicseller-bot.git

$ cd clicseller-bot

$ npm install

### deployer le bot sur Heroku
$ heroku create

# URL_TO_HEROKU_APP est l'url de votre application sur heroku  (heroku apps:info)
$ heroku config:set APP_URL='https://{URL_TO_HEROKU_APP}'

