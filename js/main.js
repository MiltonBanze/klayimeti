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

//Definindo a imagem do fundo

function changeBG(town){
    const bg = document.querySelector('main');

    bg.style.background = `url(img/${town}.png)`
    
}

//Dados na tela
function setData(data){
    document.querySelector('.text').innerText = `Tempo em ${document.querySelector('.capital').value}`;
    document.querySelector('.grades').innerText = Math.floor(data.main.temp);
    document.querySelector('.img p').innerText = data.weather[0].description;
    document.querySelector('.env span').innerText = data.main.humidity;
    document.querySelector('.img img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    
}

//Obtendo as informacoes de tempo
async function searchCity(capital) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${key}&lang=pt&units=metric`).then(response => response.json());
    
    setData(data)
    changeBG(capital)
}
const value = document.querySelector('.capital');
// Obtendo a cidade
function getCity() {
    const city = value.value;

    searchCity(city);
}

getCity();
