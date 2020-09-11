ARG NODE_VERSION=12.18.3

# DEVELOPMENT
FROM node:${NODE_VERSION}-alpine As development

WORKDIR /app
ENV NODE_ENV=development

COPY package.json /app
COPY lerna.json /app
COPY yarn.lock /app

COPY packages/server/package.json /app/packages/server/
COPY packages/config/typescript/package.json /app/packages/config/typescript/
COPY packages/config/eslint/package.json /app/packages/config/eslint/

RUN yarn config set workspaces-experimental true
RUN yarn
RUN npx lerna bootstrap

COPY . /app
RUN cd packages/server && npm run build

# PRODUCTION
FROM node:${NODE_VERSION}-alpine As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY packages/server/package.json /app

RUN npm i --only=production

COPY packages/server /app
COPY --from=development /app/packages/server/dist ./app/dist

CMD ["node", "app/dist/main"]
