FROM node:latest

COPY . /var/www

WORKDIR /var/www

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]

# docker build -f ./.docker/node.dockerfile -t danieldelgado/nodejs-restapi-seed .
# docker push danieldelgado/nodejs-restapi-seed
# docker run -p 3000:3000 --env DB_HOST=host.docker.internal --env DB_USER=postgres --env DB_PASSWORD=secret --env DB_NAME=blogdb --name my-nodejs-restapi-seed danieldelgado/nodejs-restapi-seed
