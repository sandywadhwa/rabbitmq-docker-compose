const amqp = require('amqplib/callback_api');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const config = require('./config');
const mq = require('./mq');

app.get('/send-hello', function (req, res) {
    var response = mq.send('hello', req.query);
    res.send(response); 
});

server.listen(config.app.port, () => {
    console.log(`Server listening on port: ${config.app.port}`);
});

