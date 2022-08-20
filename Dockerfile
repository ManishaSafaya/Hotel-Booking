FROM node:15

# Create app directory
WORKDIR /usr/src/hotelBooking

# Install app dependencies
COPY package.json .

RUN npm config set registry https://registry.npmjs.org/

RUN npm install pm2 -g

RUN npm install --save-exact

EXPOSE 3000 3000    

# Bundle app source
COPY . .

CMD ["pm2-docker", "server.js"]