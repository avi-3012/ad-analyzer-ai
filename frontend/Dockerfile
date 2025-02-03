# Use an official Node.js image as a parent image
FROM node:18

# Set the working directory
WORKDIR /

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Build the frontend
RUN npm run build

# Expose the frontend port
EXPOSE 3000

# Serve the frontend using a simple HTTP server
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
