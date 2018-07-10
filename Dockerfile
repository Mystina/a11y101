# FROM 526930246559.dkr.ecr.us-east-1.amazonaws.com/docker-atomapi-node
FROM kaptest/docker-atomapi-node

MAINTAINER Atom Team<atom@kaplan.com>


ARG BRANCH
ARG SHA
ARG BUILD_NUMBER

## Create app directory in container and set workdir
RUN mkdir -p /app
WORKDIR /app

# Copying the package.json to the working dir
COPY package.json /app/

# Install app depedancies
RUN npm install --production --loglevel warn

# copy the site
COPY . /app

# build.json
RUN echo "{ \"status\": \"Ok\", \"result\": { \"version\": \"1.0.0\", \"branchName\": \"$BRANCH\", \"SHA\": \"$SHA\", \"buildDate\": \"$(date)\", \"buildNumber\": \"$BUILD_NUMBER\" } }" > build.json

# Volume where the distributable site will be dropped
VOLUME /app/cdn

# builds latest portal site
CMD npm run build