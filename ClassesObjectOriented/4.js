function user(email, pass) {
    this._email = email;
    this._pass = pass;

    Object.defineProperty(this, 'email',{
        get: function() {
            return this._email
        },
        set: function(value) {
            this.email = value
        }
    })
}

const krish = new user('k@kmail.com', 'adc')
console.log(krish);