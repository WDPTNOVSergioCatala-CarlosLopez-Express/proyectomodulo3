FROM node:18.14.2-alpine3.17

WORKDIR /opt/hardmartx

COPY ./web ./web
COPY ./api ./api

WORKDIR /opt/hardmartx/web
RUN npm i
RUN npm run build
RUN mv /opt/hardmartx/web/build /opt/hardmartx/api/public
WORKDIR /opt/hardmartx/api
RUN npm i


CMD ["npm", "start"]
