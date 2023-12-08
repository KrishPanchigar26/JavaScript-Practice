const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnum = mynum.map( (num) => num + 10 )
const newnum = mynum.map( (num) => num * 10 ).map( (num) => num + 1 ).filter( (num) => num >=40 )
console.log(newnum);

const mynums = [1, 2, 3]
const mytotal = mynums.reduce(function (acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(mytotal);

const mytotal = mynums.reduce( (acc,curr) => acc+curr, 0 )
console.log(mytotal);

const myShoppingCart = [
    {
        itemName: "JavaScript",
        price: 2999
    },
    {
        itemName: "Python",
        price: 1999
    },
    {
        itemName: "Java",
        price: 3999
    },
    {
        itemName: "Mobile Development",
        price: 3499
    },
]

const pricetp = myShoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(pricetp);