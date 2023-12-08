//for in

// const myobj = {
//     js : 'JavaScrpt',
//     py : 'Python',
//     rb : 'ruby' 
// }

// for (const key in myobj) {
//     console.log(`${key} shortcut is  ${myobj[key]}`);
// }

// const lg = ["JS", "Python", "Java"]

// for (const key in lg) {
//     console.log(`${key} is shortcut of ${lg[key]}`);
// }

// const map = new Map() // map cant be used in forin loop
// map.set("IN", "India")
// map.set("Au", "Australia")
// map.set("Fr", "France")

// for (const key in map) {
//     console.log(key);
// }

// for each loop

const coding = ["JS", "Ruby", "Python", "C++", "Java"]
// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printme(item) {
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach((item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        Language: "JavaScript",
        LanguageFileName: "JS"
    },
    {
        Language: "Java",
        LanguageFileName: "Java"
    },
    {
        Language: "Python",
        LanguageFileName: "PY"
    }
]

myCoding.forEach( (item) => {
    console.log(item.LanguageFileName);
    console.log(item.Language);
} )