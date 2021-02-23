FROM node:11.13-slim

WORKDIR /opt/bloggy

COPY . /opt/bloggy

RUN npm install && npm run build

EXPOSE 8080

CMD ["npm", "run", "prod"]
