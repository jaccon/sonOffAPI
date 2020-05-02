
#  sonOff Node API
This is a easy way to controll your devices SonOff because this is a REST API running with NodeJS.
Fast and easy to configure.

  

###  How to use
First you need to configure your SonOff device follow user guide. Before you are need a eWelink account, set your e-mail and password.

  
###  Configure your sonOff API
To configure your sonOff API is very easy, open the file config.js
and put your information:

  

```

"apiHttpPort" : "3333", /* Your local TCP PORT */

"authorization" : "likaek3iugh7Apei0ohz3jee7raet3Kah6ImaeTaiy0xe7Mie6edie3ahthi", /* Your API authorization hash */

"authEmail" : "seu-email", /* Your eWelink e-mail */

"authPassword" : "sua-senha", /* Your eWelink password */

"authLocale" : "us", /* Your eWelink device location, seted in SonOff device configuration */

```
###  eWelink methods and documentation

If your would like to implement another methods in API can you follow the eWelink documentation


[https://ewelink-api.now.sh/docs/introduction](https://ewelink-api.now.sh/docs/introduction)

### step by step implementation got to

[https://jaccon.com.br/automacao-residencial-com-nodejs/](https://jaccon.com.br/automacao-residencial-com-nodejs/)
