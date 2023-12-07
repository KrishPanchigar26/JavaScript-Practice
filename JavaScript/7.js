let a = "krish"
b = a
b = "Panchigar" // Here when we make changes in B then it will only change the value of B only as it follow stack memory and in stack memory it will get only copy of a
console.log(a)
console.log(b)

let userone = {
    email: "kp@gmail.com",
    pass: "123456789"
}

console.log(userone);

let usertwo = userone

console.log(usertwo)
usertwo.email = "KK@gmail.com"

console.log(userone.email) // Here when we make changes in usertwo then it will also change the value f userone as it follow heap memory and it gets the same reference as userone is using
console.log(usertwo.email);
