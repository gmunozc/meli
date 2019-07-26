FROM node:10.16.0-stretch-slim
MAINTAINER Gonzalo Muñoz Coloma gonzalomunozcoloma@gmail.com

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends \
        build-essential && \
    # clean
    apt-get clean && \
    rm -rf /var/lib/apt


WORKDIR /srv

COPY ./client/package.json /srv/package.json


RUN npm install && \
    npm i -g typescript@~3.5.3

EXPOSE 3000
