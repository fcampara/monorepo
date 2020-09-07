ARG NODE_VERSION=12.18.3

FROM node:${NODE_VERSION}-alpine As development

WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY package.json /usr/src/app
COPY lerna.json /usr/src/app

COPY packages/server/package.json /usr/src/app/packages/server/

COPY packages/config/typescript/package.json /home/app/packages/config/

RUN npm i
RUN npx lerna bootstrap

COPY . /usr/src/app
RUN cd packages/server && npm run build

CMD ["node", "packages/server/dist/main"]
