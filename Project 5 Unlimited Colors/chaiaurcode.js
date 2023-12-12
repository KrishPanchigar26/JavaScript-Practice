const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]  //* 16 as hex = 16
    }
    return color
}

let timeinterval

const startchangingcolor = function(){
    if (!timeinterval) {
        timeinterval = setInterval(changebgcolor,1000)
    }
    // timeinterval = setInterval(changebgcolor,1000) // we can direct method also but to get clean method we use the above if so out 24 line run smoothly
    function changebgcolor() {
        document.body.style.backgroundColor= randomcolor();
    } 
}

const stopchangingcolor = function(){
    clearInterval(timeinterval)
    timeinterval = null; // it will just clear the memory
}

document.querySelector('#start').addEventListener('click', startchangingcolor)

document.querySelector('#stop').addEventListener('click', stopchangingcolor)