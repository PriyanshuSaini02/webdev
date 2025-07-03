
function studentdetail(name,fees){
    return {name,fees};
}
function emi(fees){
    return fees/10;
}

function welcome(){
    var {name,fees}=studentdetail("Priyanshu",30000);
    var emival=emi(fees);
    return `${name} with fees of ${fees} and emi of ${emival}`;
}
console.log(welcome());

