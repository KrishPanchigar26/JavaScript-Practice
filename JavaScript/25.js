for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        console.log("You have Reached Half Way");
    }
    console.log(element);
}

console.log(element); // it will not print bcz of scope

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 0; j <=10; j++) {
        // console.log(`Inner Loop: ${j} and inner value: ${i}`);
        console.log(i + ' * ' + j + ' = ' + i*j);
    }
}

let myArray = ["Ironman", "Thor", "Hulk"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break;
    }
    console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}