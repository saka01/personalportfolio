# Use the official lightweight Node.js base image
FROM node:20.11.1

# Set the working directory inside the container
WORKDIR /

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your Next.js app
RUN npm run lint
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "run", "start"]
