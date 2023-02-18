FROM python:3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install nodejs

COPY package*.json /usr/src/app
RUN npm install

COPY . /usr/src/app

EXPOSE 3000
EXPOSE 24678

CMD [ "npm", "run", "dev" ]