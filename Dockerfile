# Use an official Node runtime as a parent image
FROM node:16.20.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of your application's code
COPY . .
