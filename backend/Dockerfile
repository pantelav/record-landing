FROM node:18-alpine as backend
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "node", "app.js" ]
