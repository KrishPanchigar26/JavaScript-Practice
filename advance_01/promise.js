const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async Task is Completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Completed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task2");
        resolve()
    } , 1000)
}).then(function(){
    console.log("Async Resolved");
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "krishpanchigar", email: "krishpanchigar@gmail.com"})
    } ,1000)
})

promiseThree.then(function(user) {
    console.log(user);
})

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "Chai", password: "123"})
        } else{
            reject('Error')
        }
    } ,1000)
})

promisefour
.then(function(user) {
    console.log(user);
    return user.username
})
.then(function(username) {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("The Promise Either Resolved or Rejected");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Java", password: "123"})
        } else{
            reject('Error')
        }
    } ,1000)
})

async function consumepromisefive(){
    // const response = await promiseFive
    // console.log(response);
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromisefive()

// async function getalluser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getalluser()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log("Error");
})