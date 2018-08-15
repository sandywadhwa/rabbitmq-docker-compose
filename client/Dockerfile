FROM keymetrics/pm2:latest-alpine

# Script for waiting the RabbitMQ to be ready to listen and Run PM2
COPY wait.sh .
COPY run.sh .
RUN chmod +x wait.sh
RUN chmod +x run.sh

# Install app dependencies
COPY pm2.json .
COPY package.json .
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Bundle App files
COPY src src/

# Show current folder structure in logs
# RUN ls -al -R

CMD /wait.sh && /run.sh