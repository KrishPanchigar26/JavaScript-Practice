if (true){
    var a = 10 // this is the problem when we use var it gives value within scope also
    let b = 20
    let c = 30
}

console.log(a);
console.log(b);
console.log(c);


var c = 300

if(true){
    c = 30 // as it was defined in var the value we change of c anywhere it will be changed everywhere
}

console.log(c);

let a = 40

if(true){
    let a = 30 // as the value was defined in local scope using let then the value will not affect in global scope
    console.log("Inner: " , a);
}

console.log(a);
