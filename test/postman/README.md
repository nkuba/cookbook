# Postman System Tests

Tests can be executed in two ways: 
* Manually from [Postman](https://www.getpostman.com/) 
* In commandline with [Newman](https://github.com/nkuba/cookbook/test/postman#Newman)

## Newman

[Newman](https://www.npmjs.com/package/newman) is a Node.js package which can be used to run Postman tests from commandline.

### Prerequisites
```bash
npm install newman --global;
```

### Run tests
```bash
newman run cookbook-system-test.postman_collection.json -e env/k8s-cluster.postman_environment.json
```