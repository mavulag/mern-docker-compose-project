# Use the official Node.js image from Docker Hub
FROM node:20.18.2-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ./package.json ./
COPY ./package-lock.json ./

# Install dependencies using npm (if you're using npm)
RUN npm install

# Copy the rest of your application
COPY . .

# Expose the port the app will run on
EXPOSE 5173

# Start the React app
CMD ["npm", "run", "dev"]
