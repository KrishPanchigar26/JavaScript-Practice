const user = {
    username: "Krish",
    pass: "panchigar",
    Welcomemsg : function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
    }
}

user.Welcomemsg()
user.username = "Sam"
user.Welcomemsg()

console.log(this);

function code(){
    let username = "Krish"
    console.log(this.username); // we cant use this keyword like this in function
}

code()

const chai = function(){
    let username = "Krish"
    console.log(this.username); // using this way also we cant use this keyword
}

chai()

const chai = () => {
    let username = "Krish"
    console.log(this.username); // using this way also we cant use this keyword
}

chai()

const a = (num1, num2) => {
    return num1 + num2
}

console.log(a(5, 5));

const a = (num1, num2) =>  num1 + num2

const a = (num1, num2) =>  (num1 + num2)

const a = (num1, num2) =>  ({username: "Krish"}) // how to use object in arrow function

console.log(a(5, 5));

