FROM node:12-alpine

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

USER node

RUN yarn

COPY --chown=node:node . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]
