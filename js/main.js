//Key
const key = "9f359f49c9b6d95add5ac964421e3fc0";

//Definindo a data
const date = new Date;
const hour = document.querySelectorAll('.top .hours');
const minutes = document.querySelectorAll('.top .minutes');
const seconds = document.querySelectorAll('.top .seconds');

function updateClock() {
    const date = new Date();
    hour.forEach(h => h.innerText = date.getHours());
    minutes.forEach(m => m.innerText = date.getMinutes());
    seconds.forEach(s => s.innerText = date.getSeconds());
}
updateClock();
setInterval(updateClock, 1000);



//Dados na tela
function setData(data){
    document.querySelector('.grades').innerText = Math.floor(data.main.temp);
    document.querySelector('.img p').innerText = data.weather[0].description;
    document.querySelector('.env span').innerText = data.main.humidity;
    document.querySelector('.img img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    console.log(data)
}

//Obtendo as informacoes de tempo
async function searchCity(capital) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${key}&lang=pt&units=metric`).then(response => response.json());
    
    setData(data)
}

// Obtendo a cidade
function getCity() {
    const city = document.querySelector('main section h2').innerText;

    searchCity(city);
}

getCity();