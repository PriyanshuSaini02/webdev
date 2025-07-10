//async await- make the function asyncronous
// console.log("start script");

// async function fetchDataProducts(){
//     const data=await fetch('https://dummyjson.com/products')
//     const finalData=await data.json();
//     console.log(finalData);
// }
// fetchDataProducts();

// const promiseby=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("i will complete assignment by 1pm")
//     },3000)
// })

// async function checkAssignment(){
//     const assignmentData=await promiseby;
//     console.log(assignmentData)
// }
// checkAssignment();

// const grandparent=document.getElementById('grandparent')
// const parent = document.getElementById('parent')
// const child = document.getElementById('child')

// grandparent.addEventListener('click',()=>{
//     console.log("this is grandparent")
//     // event.stopPropagation();
// },true)

// parent.addEventListener('click', () => {
//     console.log("this is parent")
//     // event.stopPropagation();
// },true)
// child.addEventListener('click', () => {
//     console.log("this is child")
//     // event.stopPropagation();
// },true)

////////////////////////////////////////////
// function admissionProcess(studentName,studentClass){
//     console.log(`hi ${this.studentName} from class: ${this.studentClass}`);
// }

// const student1={
//     studentName:"abc",
//     studentClass:"g5"
// }
// const student2 = {
//     studentName: "xyz",
//     studentClass: "g4"
// }

// // admissionProcess("abc","g5");

// admissionProcess.call(student1);
// admissionProcess.call(student2);


function admissionProcess(studentZone, studentCampus) {
    console.log(`hi ${this.studentName} from class: ${this.studentClass} your Zone: ${studentZone} Campus: ${studentCampus}`);
}

const student1 = {
    studentName: "abc",
    studentClass: "g5"
}
const student2 = {
    studentName: "xyz",
    studentClass: "g4"
}

// admissionProcess.call(student1,"Zeta","punjab campus");
// admissionProcess.call(student2,"zeta","himachal campus");

// admissionProcess.apply(student1, ["Zeta", "punjab campus"]);
// admissionProcess.apply(student2, ["zeta", "himachal campus"]);

const admission1 =admissionProcess.bind(student1, "Zeta", "punjab campus");
const admission2=admissionProcess.bind(student2, "zeta", "himachal campus");
admission1();
admission2();