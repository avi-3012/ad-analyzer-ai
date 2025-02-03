# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Expose the port the backend runs on
EXPOSE 5000

# Command to run the backend
CMD ["node", "index.js"]
