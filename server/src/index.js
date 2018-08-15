let config = require('./config');
let amqp = require('amqplib/callback_api');

amqp.connect(config.rabbit.url, function (err, conn) {
    if (err) {
        console.error(config.rabbit.url);
        console.error(err);
        throw err;
    }

    conn.createChannel(function (err, channel) {
        if (err) {
            console.error(config.rabbit.url);
            console.error(err);
            throw err;
        }

        var q = 'hello';

        channel.assertQueue(q, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
        channel.consume(q, function (msg) {
            console.log(`${process.ppid}:${process.pid}: [x] Received ${msg.content.toString()}`);
        }, {
            noAck: true
        });
    });
});