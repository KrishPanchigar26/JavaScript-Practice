let myDate = new Date()
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString()); // it gives date and day only
console.log(myDate.toISOString());
console.log(myDate.toLocaleString()); // it gives perfect date and time in 12:00 format
console.log(myDate.toLocaleDateString()); // it gives only date
console.log(myDate.toJSON());
let date = new Date(2023, 2, 26)
console.log(date.toDateString());
let myDate1 = new Date("01-26-2023")

let mytime = Date.now()

console.log(mytime);
console.log(myDate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.getDate());
console.log(newdate.getDay());
console.log(newdate.getMonth() + 1); // add +1 so that it doesnt show 0 value
console.log(newdate.getHours());
console.log(newdate.getMinutes());
console.log(newdate.getSeconds());

newdate.toLocaleString('default', {
    weekday: "long",
})