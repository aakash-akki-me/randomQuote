const getNewQuote = document.getElementById('getNewQuote')
const quotediv = document.querySelector('.quote')
const quoteurl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
let quotearr;
const start = document.getElementById('start')
const stop = document.getElementById('stop')


//async request for quotes object
const xhr = new XMLHttpRequest();
console.log(quotediv)
xhr.open('GET', quoteurl);
xhr.send()
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        quotearr = JSON.parse(this.responseText)   // convert to json object
        // console.log(this.responseText)
        // console.log(quotearr.quotes[0])
        quotediv.innerHTML = `${quotearr.quotes[1].quote} </br> </br> Author: ${quotearr.quotes[1].author}`  // set text to div tag

    }
}


// get a random quote from a object by click on a button and set text to div file
getNewQuote.addEventListener('click', function () {
    quotediv.innerHTML = ""
    let random = Math.floor(Math.random() * 100 + 1)
    quotediv.innerHTML = `${quotearr.quotes[random].quote} </br> </br> Author :  ${quotearr.quotes[random].author}`
    bgcolor()
})


//random color genrater only for dark type color not too bright
const bgcolor = () => {
    let color = '0123456789'
    let bg = "#"
    for (let i = 0; i < 6; i++) {
        bg += color[Math.floor(Math.random() * 9)]
    }
    // console.log(bg)
    document.body.style.backgroundColor = bg;
}

// interval id for resettin timeinterval
let timer;

// button to start genrating new quotes randomly
start.addEventListener('click', function () {
    clearInterval(timer)
    timer = setInterval(() => {
        getNewQuote.click()
    }, 10000);
})


// stop time interval by its id
stop.addEventListener('click', function () {
    clearInterval(timer)
})




