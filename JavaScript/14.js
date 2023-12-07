const tinderuser = {}
tinderuser.Id = "123adc"
tinderuser.name = "Don"
tinderuser.isloggedIn = false
console.log(tinderuser);

const regularuser = {
    email: "gg@gmail.com",
    fullname: {
        userfullname: {
            firstname: "krish",
            lastname: "Panchigar"
        }
    }
}

console.log(regularuser.fullname);
console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = Object.assign(obj1, obj2)
console.log(obj3);

const obj4 = Object.assign({},obj1, obj2) //it is most commanly used so that obj combine properly bcz in this all array will combine and was merged in new obj
console.log(obj4);

console.log(obj1 === obj3);
console.log(obj3 === obj4) 

const obj5 = {...obj1, ...obj2}
console.log(obj5);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isLoggedIn'));