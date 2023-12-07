let a = "33" // as i have passed the number value the output is 33
let b = "33adc" // as i passed value that contain number and string the output is NaN
let c = "adc" // when i passed only string then the output is NaN
let d = true // when we use true then the output will be 1
let e = false // When we use false then the output will be 0
let valueInNumber = Number(a)
let v = Number(b)
let x = Number(c)
let y = Number(d)
let u = Number(e)
console.table([valueInNumber, v ,x, y, u])
console.log(typeof valueInNumber)
console.log(typeof x);
console.log(typeof v);
console.log(typeof y);
console.log(typeof u);

//for boolean

let email = "Krish" // When we pass somevalue it shows true
let pass = "" // when we leave it empty it shows false
letcheckemail = Boolean(email)
letcheckpass = Boolean(pass)
console.log(letcheckemail)
console.log(letcheckpass)