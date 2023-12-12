const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

console.log('hello');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = "grey"
        // } else if(e.target.id === 'blue'){
        //     body.style.backgroundColor = "blue"
        // } else if (e.target.id === 'white') {
        //     body.style.backgroundColor = "white"
        // } else if (e.target.id === 'yellow') {
        //     body.style.backgroundColor = 'yellow'
        // }

        //using switch case
        switch (a) {
            case 'grey':
                body.style.backgroundColor = "grey"
                break;
            case 'white':
                body.style.backgroundColor = "white"
                break;
            case 'blue':
                body.style.backgroundColor = "blue"
                break;
            case 'yellow':
                body.style.backgroundColor = "yellow"
                break;
        }
    })
})
