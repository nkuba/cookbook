# Cookbook Web App
Cookbook application Web module.

Application runs on port `3080`.

REST Server must be running and environment variables must be provided:
* `REST_HOST`
* `REST_PORT`

## Node.js

### Prerequisites
* [Node.js](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions) package installed

### Build
```bash
npm install
```

### Run
```bash
npm start

# Run with environment variables
REST_HOST=10.240.0.21 REST_PORT=32079 node Server.js
```

### Development
For development change `package.json` to:
```bash
    "start": "nodemon Server.js"
```

## Docker
```bash
# Build image
docker build -t cookbook-web .

# List images
docker images

# Tag image with VERSION
docker tag cookbook-web nkuba/cookbook-web:${VERSION}

# Push image to Docker Hub
docker push nkuba/cookbook-web
```
