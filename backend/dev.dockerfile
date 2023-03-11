FROM node:18-alpine

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

# copy source code
COPY . .

CMD [ "npm", "run", "dev"]