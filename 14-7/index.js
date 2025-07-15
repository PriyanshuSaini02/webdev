console.log("script js");

// const {sumOfTwo,xy}=require('./calculate/sumOfTwo.js')
// const mulOfTwo=require('./calculate/mulOfTwo.js')
// const divOfTwo = require('./calculate/divOfTwo.js')
// var xy=30000

const { sumOfTwo, mulOfTwo, divOfTwo } = require('./calculate/index.js')
////calculator


// function sumOfTwo(a,b){
//     console.log(a,b)
//     return a+b;
// }

// function mulOfTwo(a,b){
//     console.log(a,b)
//     return a*b;
// }
// function divOfTwo(a,b){
//     console.log(a,b)
//     return a/b;
// }
// console.log(xy)
console.log(sumOfTwo(10, 20))
console.log(mulOfTwo(10, 20))
console.log(divOfTwo(40, 20))