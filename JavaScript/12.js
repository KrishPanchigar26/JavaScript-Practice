const marvel = ["ironman", "thor", "hulk"]
const DC = ["superman", "batman", "flash"]

marvel.push(DC)
console.log(marvel);
console.log(marvel[3][0]);

const allheros = marvel.concat(DC)
console.log(allheros);

const allnheros = [...marvel,...DC]
console.log(allnheros);

const a = [1, 2, 3, [4, 5, 6], 7, [8, 7, 9]]
const b = a.flat()
console.log(b);

console.log(Array.from("Krish"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));