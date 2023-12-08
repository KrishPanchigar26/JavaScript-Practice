(function one(){ // it is called named iife
    console.log(`DB Connected`);
})(); // always use semicolon or else the other IIFE function will not run

(() => { // it is called unamed iife
    console.log(`DB Two Connected`);
})();

((name) => { // it is called unamed iife with parameter
    console.log(`DB Two Connected ${name}`);
})("Krish");