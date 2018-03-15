# Cookbook API Docs

API Documentation is generated with [apiDoc](http://apidocjs.com/).

```bash
# Install apiDoc
npm install -g apidoc

# Generate docs
apidoc -e node_modules/ -i ../. -o out

# Build Docker image

```

## Docker
```bash
# Build image
docker build -t cookbook-docs .

docker run -p 80:80 cookbook-docs

# List images
docker images

# Tag image with VERSION
docker tag cookbook-docs nkuba/cookbook-docs:${VERSION}

# Push image to Docker Hub
docker push nkuba/cookbook-docs