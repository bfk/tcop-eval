# specify the node base image with your desired version node:<version>
FROM node:8

# create app directory
WORKDIR /usr/src/tcop-eval

# install dependencies
COPY package*.json ./
RUN npm install

# copy app 
COPY . .

EXPOSE 3000


# supply CMD with a json array so it runs without a subshell
CMD [ "npm", "start" ]
