const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = path.join(__dirname, '../proto/helloworld.proto');

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

// Load proto
const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

// This matches "package helloworld" in proto
const Proto = protoDescriptor.helloworld;

// Create client (service name = greet)
const client = new Proto.greet(
    'localhost:50051',
    grpc.credentials.createInsecure()
);

// Call the sayHello RPC
client.sayHello({ name: 'Priyanshu' }, (err, response) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Greeting from server:', response.message);
});
