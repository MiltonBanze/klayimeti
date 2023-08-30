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

