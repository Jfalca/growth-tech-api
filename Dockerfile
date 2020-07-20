FROM node:alpine

WORKDIR /usr/app

COPY . .

RUN yarn

RUN yarn build

EXPOSE 3333
CMD [ "yarn", "start" ]