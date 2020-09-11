ARG NODE_VERSION=12.18.3

FROM node:${NODE_VERSION}-alpine As development

WORKDIR /app
ENV NODE_ENV=production

COPY package.json /app
COPY lerna.json /app
COPY yarn.lock /app

COPY packages/web/package.json /app/packages/web/
COPY packages/config/typescript/package.json /app/packages/config/typescript
COPY packages/config/eslint/package.json /app/packages/config/eslint/

RUN yarn config set workspaces-experimental true
RUN yarn
RUN npx lerna bootstrap

COPY . /app
RUN cd packages/web && yarn build

