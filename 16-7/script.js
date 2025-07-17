// const {
//     pbkdf2Sync,
// } = require('node:crypto');
// console.log("start")

// var a=200;

// console.log(a)

// const key = pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
// console.log(key.toString('hex'));  // '3745e48...08d59ae'
// function abc(){
//     console.log("this is a fuction")
// }

// abc();

// const key2 = pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
// console.log(key.toString('hex'));  // '3745e48...08d59ae'

// console.log("something");

// const key3 = pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
// console.log(key.toString('hex'));  // '3745e48...08d59ae'

// async
// const {
//     pbkdf2,
// } = require('node:crypto');
// console.log("start")
// console.log("something")
// pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
//     if (err) throw err;
//     console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// });
// console.log("something")
// pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
//     if (err) throw err;
//     console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// });
// console.log("something")
// pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
//     if (err) throw err;
//     console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// });
// pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
//     if (err) throw err;
//     console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// });
// console.log("something")
// console.log("something")
// console.log("something")
// console.log("something")
// pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
//     if (err) throw err;
//     console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// });
// pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
//     if (err) throw err;
//     console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// });
// pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
//     if (err) throw err;
//     console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// });
// console.log("something")
// console.log("something")
// console.log("something")
// pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
//     if (err) throw err;
//     console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// });
// pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
//     if (err) throw err;
//     console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// });
// pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
//     if (err) throw err;
//     console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// });
// console.log("something")

////////////////////////////////////////////////////////


//set immidiate-fires on following ittration
//next tick-fires immidiately on the same phase

// var a=200;
// console.log(a)
// function hello(){
//     console.log("hello")
// }
// hello()
// var b=300;
// setImmediate(()=>{
//     console.log("set immediate")
// })
// console.log(b)
// console.log("end ")

// process.nextTick(()=>{
//     console.log("next tick")
// })
// console.log("end2")

