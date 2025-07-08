Promise.allSettled([myPromise1, myPromise2, myPromise3, myPromise4])
.then((res)=>console.log("all settled "+res))
.catch(()=>console.log(err));