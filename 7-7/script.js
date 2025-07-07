console.log("Start script");
let arr=[2,4,5,6,7,8]
let arr2 = [5, 5, 5, 6, 7, 8]
// const newArr=arr.map((x)=>x*2);
// console.log(newArr)

//prototypes in js
// function doubleData(x){
//     return x*2;
// }
// Array.prototype.mapReplica=function (logic){
//     let outputArr=[];
//     for(let i=0;i<this.length;i++){
//         outputArr.push(logic(this[i]));
//     }
//     return outputArr;
// }

// const myPrototypeData=arr2.mapReplica(doubleData);
// console.log(myPrototypeData);


//Filter
const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);
// function length(word){
//     if(word.length<6){
//         return;
//     }
//     return word;
// }

// Array.prototype.filterReplica=function (logic){
//     let outputArr=[];
//     for(let i=0;i<this.length;i++){
//         if (logic(this[i])){
//             outputArr.push(logic(this[i]));
//         }
//     }
//     return outputArr;
// }

// const myPrototypeData=words.filterReplica(length);
// console.log(myPrototypeData);

// console.log(result);


//Reduce
const array1 = [1, 2, 3, 4];

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
// );

// console.log(sumWithInitial);


function sum(x,y){
    return x+y;
}

let initial=0;
Array.prototype.reduceReplica=function (logic,intial){
    let output = initial;
    for (let i = 0; i < this.length; i++) {
        output = logic(output, this[i]);
    }
    return output;
}

const myPrototypeData=array1.reduceReplica(sum,0);
console.log(myPrototypeData);

const sumWithInitial2 = array1.reduceReplica(
    (accumulator, currentValue) => accumulator + currentValue,
    initial,
);
console.log(sumWithInitial2)