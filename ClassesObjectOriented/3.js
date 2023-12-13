//getter setter

class User {
    constructor(email,pass){
        this.email = email;
        this.pass = pass
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get pass(){
        return `${this._pass}krish`
    }
    set pass(value){
        this._pass = value
    }
}

const krish = new User('k@krish.com', 'abc')
console.log(krish.pass);
console.log(krish.email);