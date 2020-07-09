#!/bin/sh

if [ $APP_ENV == "local" ]; then
    cp /usr/src/app/.env.local /usr/src/app/.env;
    sed -i "s/\$SERVER_NAME/online.eggsmartpos.local/g" /etc/nginx/sites-enabled/app.conf;
    sed -i "s/\$REDIRECT_URL/online.eggsmartpos.local/g" /etc/nginx/sites-enabled/app.conf;
    sed -i "s/\$HTTP_X_FORWARDED_HOST/online.eggsmartpos.local/g" /etc/nginx/sites-enabled/app.conf;
fi

if [ $APP_ENV == "alpha" ]; then
    cp /usr/src/app/.env.alpha /usr/src/app/.env;
    sed -i "s/\$START/start-alpha/g" /etc/supervisor.d/nodejs.ini;
    sed -i "s/\$SERVER_NAME/alpha-online.eggsmartpos.com/g" /etc/nginx/sites-enabled/app.conf;
    sed -i "s/\$REDIRECT_URL/alpha-online.eggsmartpos.com/g" /etc/nginx/sites-enabled/app.conf;
    sed -i "s/\$HTTP_X_FORWARDED_HOST/alpha-online.eggsmartpos.com/g" /etc/nginx/sites-enabled/app.conf;
fi

if [ $APP_ENV == "staging" ]; then
    cp /usr/src/app/.env.staging /usr/src/app/.env;
    sed -i "s/\$START/start-staging/g" /etc/supervisor.d/nodejs.ini;
    sed -i "s/\$SERVER_NAME/staging-online.eggsmartpos.com/g" /etc/nginx/sites-enabled/app.conf;
    sed -i "s/\$REDIRECT_URL/staging-online.eggsmartpos.com/g" /etc/nginx/sites-enabled/app.conf;
    sed -i "s/\$HTTP_X_FORWARDED_HOST/staging-online.eggsmartpos.com/g" /etc/nginx/sites-enabled/app.conf;
fi

if [ $APP_ENV == "preprod" ]; then
    sed -i "s/\$START/start-preprod/g" /etc/supervisor.d/nodejs.ini;
    sed -i "s/\$SERVER_NAME/preprod-online.eggsmartpos.com/g" /etc/nginx/sites-enabled/app.conf;
    sed -i "s/\$REDIRECT_URL/preprod-online.eggsmartpos.com/g" /etc/nginx/sites-enabled/app.conf;
    sed -i "s/\$HTTP_X_FORWARDED_HOST/preprod-online.eggsmartpos.com/g" /etc/nginx/sites-enabled/app.conf;
fi

if [ $APP_ENV == "production" ]; then
    sed -i "s/\$START/start-production/g" /etc/supervisor.d/nodejs.ini;
    sed -i "s/\$SERVER_NAME/online.eggsmartpos.com/g" /etc/nginx/sites-enabled/app.conf;
    sed -i "s/\$REDIRECT_URL/online.eggsmartpos.com/g" /etc/nginx/sites-enabled/app.conf;
    sed -i "s/\$HTTP_X_FORWARDED_HOST/online.eggsmartpos.com/g" /etc/nginx/sites-enabled/app.conf;
fi

# Disable nginx errorpage
if [ $APP_ENV = "local" ] || [ $APP_ENV = "alpha" ] || [ $APP_ENV = "staging" ]; then
    sed -i 's/include configs\/errorpage.conf/#include configs\/errorpage.conf/g' /etc/nginx/sites-enabled/app.conf;
fi

supervisord -n -c /etc/supervisord.conf