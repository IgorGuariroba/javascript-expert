# Pull from the official Docker image for Node.js
FROM node:14

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Update npm to the latest version
RUN npm install -g npm@latest

# Change to non-root user
USER node

# Copy the desired files from your project to the current directory in the container
COPY --chown=node:node . .

# Install dependencies
RUN npm install

CMD ["bash", "-c", "while true; do echo Docker is running...; sleep 100; done"]