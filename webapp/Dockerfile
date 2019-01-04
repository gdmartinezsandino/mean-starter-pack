# base image
FROM node:9.6.1

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
RUN mkdir -p /app/webapp
WORKDIR /app/webapp

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/webapp/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/webapp
RUN npm install

# add app
COPY . ./app/webapp

# Expose the port the app runs in
EXPOSE 4200

# start app
CMD ng serve --host 0.0.0.0
