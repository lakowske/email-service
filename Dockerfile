FROM flaxservices_node12

MAINTAINER lakowske@gmail.com


#Make mount point of node project
RUN mkdir /node

#Install the mail program
RUN apt-get update; apt-get install -y ssmtp

RUN npm install -g mustache

ADD . /src

RUN mkdir -p /etc/ssmtp

RUN mustache /src/config.json /src/ssmtp.conf.mustache > /etc/ssmtp/ssmtp.conf

WORKDIR /node

EXPOSE 3322

CMD npm install; node server.js 3322
