const user = {
    username: "krish",
    logincount: 8,
    SignedIn: true,

    getUserdetail: function(){
        console.log("Got User Details");
        console.log(`Username: ${username}`); // this will give error as node doesnt know which username u want
        console.log(`Username: ${this.username}`);// this keyword is used to tell javascript that use my current context username which was given above
        console.log(this); //it will return whole current context
    }
}

console.log(user.username);
// console.log(user.getUserdetail());
console.log(this); // it will give empty parenthesis as there is no current context defined

function User(username, logincount, isLoggedIn){
    this.username = username,
    this.logincount = logincount,
    this.isLoggedIn = isLoggedIn

    return this // even if we dont use return it will give values but it is good habit to use return
}

// const userOne = User("Krish", 16, true)
// const usertwo = User("Panchigar", 21, false) // if we dont use new keyword then it will overwrite values
const userOne = new User("Krish", 16, true)
const usertwo = new User("Panchigar", 21, false)
console.log(userOne);
console.log(usertwo);