const name = "Krish"
const surname = "Panchigar"
// console.log(name + surname + "21");
console.log(`my First name is ${name} last name is ${surname} my age is 21`);

const GameName = new String('LeagueofLegends')
console.log(GameName.length);
console.log(GameName.charAt(4));
console.log(GameName.toUpperCase());
console.log(GameName.charAt(0).toUpperCase());
console.log(GameName.toLowerCase());
console.log(GameName.substring(2,10));
let sGameName = GameName.slice(-14,4)
console.log(sGameName);
let fn = "      Krish      "
console.log(fn)
console.log(fn.trim());

const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37"
console.log(url.replace('watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37','kp'));

let zy = "k-n-p"
console.log(zy.split("-"))