const score = 400
console.log(score);
let value = new Number(500)
console.log(value);
console.log(value.toString().length)
console.log(value.toFixed(2));

const price = 12.389
console.log(price.toPrecision(2));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math.abs(-41));
console.log(Math.random());
console.log(Math.floor(41.414141));
console.log(Math.ceil(41.41414));
console.log(Math.round(4.6));
console.log(Math.min(4, 6, 2, 8));
console.log(Math.max(4, 6, 2, 8));

console.log(Math.random())
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 30

console.log(Math.floor(Math.random() * ((max - min + 1) + min)))