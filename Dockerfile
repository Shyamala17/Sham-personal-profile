# Step 1: Use official Node.js base image
FROM node:18

# Step 2: Set working directory inside container
WORKDIR /usr/src/app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy application source code
COPY . .

# Step 5: Expose port 3000
EXPOSE 3000

# Step 6: Define command to run app
CMD ["node", "app.js"]
