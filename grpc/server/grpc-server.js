const express = require('express');
const app = express();
const path = require('path');
const protoLoader = require('@grpc/proto-loader');
const grpc = require('@grpc/grpc-js');

const PROTO_PATH = path.join(__dirname, '../proto/helloworld.proto');

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const packageObject = grpc.loadPackageDefinition(packageDefinition);

const Proto = packageObject.helloworld;

function sayHello(call, callback) {
    callback(null, { message: 'Hello ' + call.request.name });
}

const server = new grpc.Server();
server.addService(Proto.greet.service, { sayHello });

// ✅ start gRPC server
const GRPC_PORT = '0.0.0.0:50051';
server.bindAsync(GRPC_PORT, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error('Failed to start gRPC server:', err);
        return;
    }
    console.log(`gRPC server running at ${GRPC_PORT}`);
    server.start();
});

// Express server
const port = 5000;
app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
});