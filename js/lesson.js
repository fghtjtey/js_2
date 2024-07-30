// phone checker

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579][0-9]{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = (() => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'Not ok'
        phoneResult.style.color = 'red'
    }
})


// Tab Slider

const tabContents = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')

let currentIndex = 0

const hideTabContent = () => {
    tabContents.forEach((tabBlock) => {
        tabBlock.style.display = 'none'
    })
    tabItems.forEach((tab) => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContents[index].style.display = 'block';
    tabItems[index].classList.add('tab_content_item_active')
}

const changeSlide = () => {
    hideTabContent()
    showTabContent(currentIndex)
    currentIndex = (currentIndex + 1) % tabContents.length
}

setInterval(changeSlide, 3000)

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                hideTabContent()
                showTabContent(tabIndex)
                currentIndex = tabIndex
            }
        })
    }
}

hideTabContent()
showTabContent(currentIndex)


// CONVERTER

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const converter = (input, targetInputs) => {
    input.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();

        request.onload = () => {
            const data = JSON.parse(request.response);
            const usdRate = data.usd;
            const eurRate = data.eur;

            if (input.id === 'som') {
                targetInputs.usd.value = (input.value / usdRate).toFixed(2);
                targetInputs.eur.value = (input.value / eurRate).toFixed(2);
            }
            if (input.id === 'usd') {
                targetInputs.som.value = (input.value * usdRate).toFixed(2);
                targetInputs.eur.value = (input.value * (usdRate / eurRate)).toFixed(2);
            }
            if (input.id === 'eur') {
                targetInputs.som.value = (input.value * eurRate).toFixed(2);
                targetInputs.usd.value = (input.value * (eurRate / usdRate)).toFixed(2);
            }
        };
    };
}

converter(somInput, { usd: usdInput, eur: eurInput });
converter(usdInput, { som: somInput, eur: eurInput });
converter(eurInput, { som: somInput, usd: usdInput });



//DRY - don't repeat yourself
//KISS -keep is simple stupid

//CARD SWITCHER

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
let count = 1

const cardFetcher = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `
            <p>${data.title}</p>
            <p style = "color: ${data.complated ? 'green' : 'red'}">${data.complated}</p>
            <span>${data.id}</span>
            `
        })
}

btnNext.onclick = () => {
    count++
    cardFetcher(count)
}


// WEATHER

const citySearchInput = document.querySelector('.cityName')
// const searchButton = document.querySelector('#search')
const cityName = document.querySelector('.city')
const cityTemp = document.querySelector('.temp')
const URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

const citySearch = () => {
    citySearchInput.oninput = (event) => {
        fetch(`${URL}?q=${event.target.value}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                cityName.innerHTML = data.name
                cityTemp.innerHTML = data?.main?.temp? Math.round(data?.main?.temp - 273) + '&deg;C' : '...'
            })
    }
}
citySearch()