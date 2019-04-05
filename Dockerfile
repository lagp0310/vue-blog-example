FROM node:10-slim

WORKDIR /opt/bloggy

COPY package*.json ./

RUN npm install

COPY . /opt/bloggy

EXPOSE 8080

CMD ["npm", "run", "start:prod"]
