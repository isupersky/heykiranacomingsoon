FROM node:12
COPY . .
RUN npm ci

EXPOSE 3000

CMD [ "npm", "start" ]
