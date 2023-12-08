//for of it doesnt work for objects

const arr = [1, 2, 3, 4, 5, 6]

for (const i of arr) {
    console.log(i);
}
const arr1 = ["Hello", "World", "Hi"]

for (const i of arr1) {
    console.log(i);
}

const arr2 = "Hello World"

// maps

const map = new Map()
map.set("IN", "India")
map.set("Au", "Australia")
map.set("Fr", "France")
console.log(map);

for (const [key, value] of map) {
    console.log(key + " :- " + value);
}