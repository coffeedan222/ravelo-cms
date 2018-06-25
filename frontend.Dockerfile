FROM node:10.3

LABEL maintainer="Jesus Rodriguez<arturo@ravelo.ca>"

# Create app directory
WORKDIR /code

ADD ./frontend /code
ADD ./public /code
ADD ./package.json /code

RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "docker:frontend:dev" ]