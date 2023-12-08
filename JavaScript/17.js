function calculatecartprice(num1) {
    return num1;
}

console.log(calculatecartprice(200 ,400 ,500))



function calculatecartprice(...num1) { //... will add and print all values in array form it is called rest operator
    return num1;
}

console.log(calculatecartprice(200 ,400 ,500))


const user = {
    username: "Krish",
    pass: "123"
}

function handleobj(anyobj) {
    console.log(`Username is ${anyobj.username} and Password is ${anyobj.pass}`);
}

handleobj(user)


function handleobj(anyobj) {
    console.log(`Username is ${anyobj.username} and Password is ${anyobj.pass}`);
}

handleobj({
    username: "Panchigar",
    pass: 321
})


const Arr = ["Krish", "Panchigar"]

function returnValue(getarr){
    return getarr[0]
}

console.log(returnValue(Arr));


function returnValue(getarr){
    return getarr[2]
}

console.log(returnValue([100, 200, 300, 400]));