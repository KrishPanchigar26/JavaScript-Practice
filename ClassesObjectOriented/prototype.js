// everything array, string,function can be used in object but after object there is no other super thing which can be use object
let myhero = ["IronMan", "Thor"]

let heropower = {
    Ironman: "Iron Suit",
    Thor: "Hammer",

    getThorpower: function(){
        console.log(`Thor Power is ${this.Thor}`);
    }
}

Object.prototype.krish = function(){ // u can create properties like this which can used in everything object, function, string, array
    console.log(`Krish is Present in all Object`);
}

// heropower.krish()

// myhero.krish()

Array.prototype.k1 = function(){
    console.log(`Power Initiated`);
}

myhero.k1()

// heropower.k1() // here the prototype is created for array so it cant be used by object as it is a superme one but the prototype given in object can be used by everything

const user = {
    username: "Krish",
    email: "krish@google.com"
}

const teacher = {
    MakeVideo: true
}

const TeacherSupport = {
    isAvailable: false 
}

const TAsupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeacherSupport, // old syntax
}

teacher.__proto__= user // old syntax

//modern syntax

Object.setPrototypeOf(TeacherSupport, teacher)

let anotherusername = "ChaiaurCode    "

String.prototype.truelenght = function(){
    console.log(`${this}`);
    console.log(`ture lenght is: ${this.trim().length}`);
}

anotherusername.truelenght()
"Krish     ".truelenght()
"Panchigar".truelenght()