FROM node:18.12.1-alpine

WORKDIR /app

COPY rush.json  /app/
COPY common/ /app/common/
COPY server/ /app/server/
COPY client/ /app/client/

RUN npm install -g @microsoft/rush
RUN rush update
RUN rush build

EXPOSE 5000

CMD node server/dist/index.js
