FROM node:10.3

LABEL maintainer="Jesus Rodriguez<arturo@ravelo.ca>"

# Create app directory
WORKDIR /code

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
ADD ./backend /code
ADD ./package.json /code

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source

EXPOSE 3000
CMD [ "npm", "run", "docker:backend:dev" ]