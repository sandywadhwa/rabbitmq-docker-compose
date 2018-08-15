# RabbitMQ + NodeJS + Docker

An exemple using:

- [https://www.docker.com/](Docker)
- [https://docs.docker.com/compose/](Docker-Compose)
- [https://nodejs.org/](NodeJS)
- [https://www.rabbitmq.com/](RabbitMQ)
- [https://github.com/jwilder/nginx-proxy](Nginx-proxy)

## Use

With [https://www.docker.com/get-started](docker) installed in your system:

- [https://store.docker.com/editions/community/docker-ce-desktop-mac](for macos)
- [https://store.docker.com/editions/community/docker-ce-desktop-windows](for windows)
- for Linux
> - [https://docs.docker.com/install/linux/docker-ce/centos/](CentOS)
> - [https://docs.docker.com/install/linux/docker-ce/debian/](Debian)
> - [https://docs.docker.com/install/linux/docker-ce/ubuntu/](Ubuntu)

### Clone this repository

```bash
git clone https://github.com/jmarcon/rabbitmq-docker-compose
```

### Initialize servers

```bash
docker-compose up -d
```

### Try it

In your terminal execute: ```docker-compose logs --follow server```

Send a get request to your client ```http://localhost:3001/send-hello?msg=hello%20world```, you will receive a response with the result of the message and you will can see a logged message in your terminal.

If you want, you can open your browser in ```http://localhost:15672``` to manage the RabbitMQ server (user: user, pass: pass);
