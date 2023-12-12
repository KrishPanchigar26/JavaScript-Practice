let randomnum = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevguess = []
let numguess = 1
let playgame = true

if (playgame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userinput.value)
        // console.log(guess);
        validateguess(guess)
    })
}

function validateguess(guess){
    if (isNaN(guess)){
        alert('Please enter a Valid Number')
    } else if(guess < 1){
        alert('Please enter Number greater than 0')
    } else if (guess > 100) {
        alert('Please enter Number less than 100')
    } else{
        prevguess.push(guess)
        if(numguess === 11){
            displayguess(guess)
            displaymessage(`Game Over. Random Number was ${randomnum}`)
            endgame()
        } else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if (guess === randomnum) {
        displaymessage(`You Guesded it Right`)
        endgame()
    } else if (guess < randomnum) {
        displaymessage(`Your Guess is Too Low`)
    } else if (guess > randomnum) {
        displaymessage(`Your Guess is Too High`)
    }
}

function displayguess(guess){
    userinput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numguess++;
    remaining.innerHTML = `${11 - numguess}`
}

function displaymessage(message){
    loworhigh.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
    userinput.value = '';
    userinput.setAttribute('disable', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id ="newGame">Start Over</h2>`;
    startOver.appendChild(p);
    playgame = false;
    newGame();
}

function newGame(){
    const newgamebtn = document.querySelector('#newGame')
    newgamebtn.addEventListener('click', function(e){
        randomnum = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numguess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numguess}`;
        userinput.removeAttribute('disable');
        startOver.removeChild(p);
        playgame = true;
    })
}