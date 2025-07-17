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


// const dns = require('node:dns');
// const options = {
//     family: 6,
//     hints: dns.ADDRCONFIG | dns.V4MAPPED,
// };
// dns.lookup('google.com', options, (err, address, family) =>
//     console.log('address: %j family: IPv%s', address, family));
// // address: "2606:2800:21f:cb07:6820:80da:af6b:8b2c" family: IPv6

// // When options.all is true, the result will be an Array.
// options.all = true;
// dns.lookup('google.com', options, (err, addresses) =>
//     console.log('addresses: %j', addresses));
// // addresses: [{"address":"2606:2800:21f:cb07:6820:80da:af6b:8b2c","family":6}]


// const dns = require('node:dns');
// dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
//     console.log(hostname, service);
//     // Prints: localhost ssh
// });

// Callback-based API
const dns =require('node:dns');

// 1. dns.lookup
dns.lookup('google.com', (err, addr, family) => {
    console.log('lookup →', { addr, family });
});

// 2. dns.resolve* (A, AAAA, MX, TXT, etc.)
dns.resolve4('google.com', (err, addrs) => {
    console.log('resolve4 →', addrs);
});
dns.resolve6('google.com', (err, addrs) => {
    console.log('resolve6 →', addrs);
});
dns.resolveMx('google.com', (err, mx) => {
    console.log('resolveMx →', mx);
});
dns.resolveTxt('google.com', (err, txt) => {
    console.log('resolveTxt →', txt);
});
dns.resolveNs('google.com', (err, ns) => {
    console.log('resolveNs →', ns);
});
dns.resolveSrv('google.com', (err, srv) => {
    console.log('resolveSrv →', srv);
});
dns.resolveCname('www.google.com', (err, cname) => {
    console.log('resolveCname →', cname);
});
dns.resolveSoa('google.com', (err, soa) => {
    console.log('resolveSoa →', soa);
});
dns.resolveNaptr('google.com', (err, naptr) => {
    console.log('resolveNaptr →', naptr);
});
dns.resolvePtr('8.8.8.8', (err, ptr) => {
    console.log('resolvePtr →', ptr);
});
dns.resolveAny('google.com', (err, any) => {
    console.log('resolveAny →', any);
});

// 3. dns.reverse
dns.reverse('8.8.8.8', (err, hostnames) => {
    console.log('reverse →', hostnames);
});

// 4. dns.lookupService
dns.lookupService('8.8.8.8', 53, (err, hostname, service) => {
    console.log('lookupService →', { hostname, service });
});

// Promise-based API
const {   dnsPromises, Resolver } =require('node:dns');

// 5. Using dnsPromises
// (async () => {
//     try {
//         console.log('promises.lookup →', await dnsPromises.lookup('example.com'));
//         console.log('promises.resolve4 →', await dnsPromises.resolve4('example.com'));
//         console.log('promises.resolveAny →', await dnsPromises.resolveAny('example.com'));
//         console.log('promises.reverse →', await dnsPromises.reverse('8.8.8.8'));
//     } catch (e) {
//         console.error(e);
//     }
// })();

// 6. dnsPromises.setServers / getDefaultResultOrder
// dnsPromises.setServers(['1.1.1.1', '8.8.8.8']);
// console.log('getDefaultResultOrder →', dnsPromises.getDefaultResultOrder());
// dnsPromises.setDefaultResultOrder('ipv4first');

// 7. dns.Resolver (custom resolver)
const resolver = new Resolver();
resolver.setServers(['8.8.4.4']); // use custom DNS
resolver.resolveTxt('example.com', (err, records) => {
    console.log('Resolver resolveTxt →', records);
});
