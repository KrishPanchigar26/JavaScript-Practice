// Singleton
// Object.create

// object literals
const mysyb = Symbol("key1");
const user = {
    name: "Krish",
    "full name": "Krish Panchigar",
    [mysyb]: "mykey1",
    age: 21,
    email: "Krish@google.com",
    location: "Surat",
    isLoggedIn: false,
    lastLoogedIn: ["Monday", "Wednesday", "Friday"]
}

console.log(user.email);
console.log(user["full name"]);
console.log(user[mysyb]);
console.log(user);

user.greetings = function(){
    console.log("Hello JS User");
}

user.greetings2 = function(){
    console.log(`Hello JS User ${this.email}`);
}

console.log(user.greetings());
console.log(user.greetings2());