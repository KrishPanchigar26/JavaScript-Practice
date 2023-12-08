const email = ""

if (email) {
    console.log("Got ur Mail ID");
}   else {
    console.log("Please Enter your email ID");
}

const username = []

if (username.length === 0) {
    console.log("Array is empty");
}

const username = {}

if (Object.keys(username).length === 0) {
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??)

let val1;
val1 = 5 ?? 10
val1 = null ?? 7
val1 = 5 ?? undefined
val1 = null ?? undefined ?? 2
val1 = null ?? 10 ?? 20

console.log(val1);

// Turniary Operator
const age = 17
age < 18 ? console.log("He is young") : console.log("he can vote")