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


// Obtendo a cidade
const city = document.querySelectorAll('main section h2');

async function searchCity(capital) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${key}&lang=pt&units=metric`).then(response => response.json());
    console.log(data);
}
//Cidades
city.forEach((town, index) => {
    const targetCity = town.innerText;
    searchCity(targetCity); // Chamando a função para cada cidade
});