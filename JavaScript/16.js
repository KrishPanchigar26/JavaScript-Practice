function name () {
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
}

name()

function add2number(number1, number2) {
   console.log(number1 + number2);
}

add2number(3, 4)

function add2number (number1, number2){
    let result = number1 + number2;
    console.log("Hello");
    return result;
    console.log("Hello"); // nothing will print after return statement
}

function add2number (number1, number2){
    return number1 + number2;
}

const result = add2number(3, 3);
console.log("Result: " , result);
console.log(result);

function Loginusermsg(username) {
    if (username === undefined){
        console.log("Please Enter a Username");
        return
    }
    return `${username} Just Logged In`
}

console.log(Loginusermsg("Krish"));


function Loginusermsg(username = "Sam") { // Given Default Value
    if (username === undefined){
        console.log("Please Enter a Username");
        return
    }
    return `${username} Just Logged In`
}

console.log(Loginusermsg());
