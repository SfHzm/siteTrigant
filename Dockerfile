# Set the base image to node:lts
FROM node:lts as build

# Specify where our app will live in the container
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install application dependencies
COPY package.json ./
COPY package-lock.json ./

COPY package.json ./app
COPY package-lock.json ./app

# Copy the React App to the container
COPY . /app/

# Prepare the container for building React
RUN npm install
# We want the production version
RUN npm run build

# Prepare nginx
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Fire up nginx
EXPOSE 80
#VOLUME /usr/share/nginx/html
#VOLUME /etc/nginx
#VOLUME /var/log/nginx
CMD ["nginx", "-g", "daemon off;"]
