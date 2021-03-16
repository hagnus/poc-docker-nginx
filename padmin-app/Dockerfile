FROM node:14-alpine as app-build-stage

#Use wait 
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

WORKDIR /home/node/app
# COPY package*.json /usr/src/app/
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

# FROM nginx:1.19.2-alpine as app-deploy-stage
# RUN apk add --no-cache bash curl
# RUN mkdir /app
# COPY --from=app-build-stage /home/node/app /app
# COPY /nginx /etc/nginx/conf.d