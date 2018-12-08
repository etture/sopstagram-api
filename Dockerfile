FROM node:8-alpine

# Create app directory
WORKDIR /usr/src/app

# Install the app dependencies
COPY package.json ./

RUN npm install

# Bundle app source
COPY . ./

EXPOSE 3015

CMD ["npm", "start"]