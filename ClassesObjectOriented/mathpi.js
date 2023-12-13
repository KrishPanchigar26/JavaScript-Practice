const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);
const a = {
    name: 'krish',
    pass: 123,
    isAvailable: true,

    any: function(){
        console.log("hello");
    }
}

console.log(Object.getOwnPropertyDescriptor(a, "name"));

Object.defineProperty(a, 'name',{
    writable: false,
    enumerable: false 
})

console.log(Object.getOwnPropertyDescriptor(a, 'name'));

for (let [key, value] of Object.entries(a)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
    }
}