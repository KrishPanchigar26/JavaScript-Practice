const arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr[4]);
const heros = ["IronMan", "Thor", "Hulk", "CaptainAmerica"]

//array method

arr.push(6)
console.log(arr);
arr.pop()
console.log(arr);

arr.unshift(9)
arr.shift()
console.log(arr);
console.log(arr.includes(7));

const newarr = arr.join()
console.log(typeof newarr);

console.log("A " , arr);

let myarr = arr.slice(1,4) // it just print the copy of array and the original array doest change
console.log(myarr)
console.log("B ", arr);

let myarr1 = arr.splice(1,4) // it makes changes in original array as well
console.log(myarr1);
console.log("C ", arr);