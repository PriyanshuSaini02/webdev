console.log("start script")

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("pransh will get placement");
//     }, 300);
// });

// const myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("foo");
//     }, 300);
// });

// myPromise
// .then((res)=> console.log(res))
// .catch((err)=>console.log(err))

// console.log(myPromise)

// function placement(step, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("placed", step);
//             resolve("Done: " + step);
//         }, delay);
//     });
// }

// placement("placed", 1000)
//     .then(() => placement("party", 2000))
//     .then(() => placement("working", 1500))
//     .then(() => placement("layoff", 1000))
//     .catch((err) => console.log("Error:", err));

///////////////////////////////////////////////////////////////

const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("jet 1");
    }, 3000);
});
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("jet 2");
    }, 4000);
});

const myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("jet 3");
    }, 2000);
});
const myPromise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("jet 4");
    }, 5000);
});

// Promise.all([myPromise1,myPromise2,myPromise3,myPromise4])
// .then((res)=>console.log("all resolved "+res))
// .catch((err)=>console.log("rejected "+ err));
// output all resolve-all resolved jet 1,jet 2,jet 3,jet 4
// output rejected- jet 1

// Promise.allSettled([myPromise1, myPromise2, myPromise3, myPromise4])
// .then((res)=>console.log("all settled "+res))
// .catch(()=>console.log(err));
//output all settled-status,reson
//output rejected- {reject}

// Promise.any([myPromise1, myPromise2, myPromise3, myPromise4])
// .then((res)=>(console.log("any resolved " +res)))
// .catch(()=>console.log(err));
//output- jet 3

// Promise.race([myPromise1, myPromise2, myPromise3, myPromise4])
// .then((res)=>(console.log(res)))
// .catch(()=>console.log(err));
//output- jet 3