// const EventEmitter = require('node:events');

// const eventEmitter = new EventEmitter();

// eventEmitter.on('g5', () => {
//     console.log('started');
// });

// eventEmitter.emit('g5');

// eventEmitter.on('start', number => {
//     console.log(`started ${number}`);
// });

// eventEmitter.emit('start', 23);

// eventEmitter.once('once', () => {
//     console.log('started once');
// });

// eventEmitter.removeListener('g5');
// eventEmitter.emit('once');
// eventEmitter.emit('once');
// eventEmitter.emit('g5');

// eventEmitter.removeAllListeners();

// eventEmitter.emit('start', 23);

// const dns = require('node:dns');

// dns.lookup('google.com', (err, address, family) => {
//     console.log('address: %j family: IPv%s', address, family);
// });

// const dns = require('node:dns');

// dns.resolve4('chitkara.edu.in', (err, addresses) => {
//     if (err) throw err;

//     console.log(`addresses: ${JSON.stringify(addresses)}`);

//     addresses.forEach((a) => {
//         dns.reverse(a, (err, hostnames) => {
//             if (err) {
//                 throw err;
//             }
//             console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
//         });
//     });
// });

