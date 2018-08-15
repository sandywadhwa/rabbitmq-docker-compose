let config = require('./config');
let amqp = require('amqplib/callback_api');

let mq = {};

amqp.connect(config.rabbit.url, (err, conn) => {
    if (err) {
        console.error(config.rabbit.url);
        console.error(err);
        res.send(JSON.stringify(err));
        return;
    }

    console.info('Rabbit connection: OK!');
    mq.conn = conn;
    conn.createChannel((err, channel) => {
        if (err) {
            console.error(config.rabbit.url);
            console.error(err);
            res.send(JSON.stringify(err));
            return;
        }
        console.info('Rabbit channel: OK!');
        mq.channel = channel;
    });
});


mq.send = (q, msg) => {
    q = q || 'hello';
    msg = Date.now() + ' : ' + JSON.stringify(msg || 'Hello World!');

    mq.channel.assertQueue(q, {
        durable: false
    });

    if (mq.channel.sendToQueue(q, Buffer.from(msg))) {
        console.log(`${process.ppid}:${process.pid}: [x] Sent ${msg}`);
        return (` [x] Sent ${msg}`);
    } else {
        console.log(`${process.ppid}:${process.pid}: [ ] Sent ${msg}`);
        return (` [ ] Not Sent ${msg}`);
    }
}

module.exports = mq;