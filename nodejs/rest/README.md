# Cookbook REST App
Cookbook application REST module.

Application runs on port `3001`.

MongoDB must be running and environment variables must be provided:
* `MONGO_HOST`
* `MONGO_PORT`

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
```

### Development
For development change `start` script command in `package.json` to:
```bash
    "start": "nodemon Server.js"
```

## Docker
```bash
# Build image
docker build -t cookbook-rest .

# List images
docker images

# Tag image with VERSION
docker tag cookbook-web nkuba/cookbook-rest:${VERSION}

# Push image to Docker Hub
docker push nkuba/cookbook-rest
```
