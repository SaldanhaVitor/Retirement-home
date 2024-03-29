FROM node:14.15.4-alpine

RUN addgroup -S nupp && adduser -S -g nupp nupp

ENV HOME=/home/nupp
WORKDIR ${HOME}/app
ENV NODE_PATH=.

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "wait-for", "${HOME}/app/"]
COPY ["./", "${HOME}/app/"]

ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.2/dumb-init_1.2.2_amd64 /usr/local/bin/dumb-init

RUN chown -R nupp:nupp ${HOME}/* /usr/local/ && \
    chmod +x /usr/local/bin/dumb-init && \
    chmod +x ./wait-for && \
    npm cache verify && \
    npm install --silent --progress=false --production && \
    chown -R nupp:nupp ${HOME}/*


USER nupp

EXPOSE 3000

CMD ["dumb-init", "npm", "run", "start"]
