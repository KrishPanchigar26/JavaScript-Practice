const temp = 41

if (temp < 41) {
    console.log("less then 50");
}   else {
    console.log("Temperature is greater than 50");
}

const score = 200

if (score > 100) {
    const power = "Run"
    console.log(`Your Power: ` ,power);
}

console.log(power);

const balance = 1001

if (balance < 500) {
    console.log("less than 500");
}   else if(balance < 750){
    console.log("less than 750");
}   else if (balance == 1000) {
    console.log("Your Balance is Maintained");
}   else {
    console.log("Your Balance is more than minimum");
}

const userloggedIn = true
const debitcard = true
const LoggedIngoogle = false
const LoggedIngmail = true

if (userloggedIn && debitcard) {
    console.log("You can Buy Course");
}

if (LoggedIngmail || LoggedIngoogle || guestuser) {
    console.log("Welcome user");
}