# Set the base image to Node (slim version)
FROM node:slim

# Install nodemon
RUN npm install -g nodemon

# Install vim
#RUN apt-get update && apt-get install -y vim

# Work directory
RUN mkdir -p /src
WORKDIR /src
ADD . /src
RUN npm install

# Expose HTTP server
EXPOSE 8080

# Cleanup and slim down image
#RUN apt-get clean
#RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Run app
CMD ["nodemon", "/src/app.js"]

