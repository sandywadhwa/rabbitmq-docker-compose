let config = {};

config.isDev = process.env.NODE_ENV === 'production';

config.app = {};
config.app.port = process.env.NODE_PORT || 3000;

config.rabbit = {};
config.rabbit.useCredentials = true;
config.rabbit.host = process.env.RABBITMQ_HOST;

config.rabbit.credentials = {}
config.rabbit.credentials.user = 'user';
config.rabbit.credentials.pass = 'pass'

if(config.rabbit.useCredentials) {
    config.rabbit.url = `amqp://${config.rabbit.credentials.user}:${config.rabbit.credentials.pass}@${config.rabbit.host}`
}else{
    config.rabbit.url = `amqp://${config.rabbit.host}`;
}

module.exports = config;