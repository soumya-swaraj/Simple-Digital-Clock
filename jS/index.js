function updateClock() {
    let date = new Date();
    let currentHr = date.getHours();
    let currentMin = date.getMinutes();
    let currentSec = date.getSeconds();

    let timeOfDay = (currentHr < 12) ? "AM" : "PM";

    currentHr = (currentHr > 12) ? currentHr - 12 : currentHr;
    currentHr = (currentHr == 0) ? 12 : currentHr;

    currentMin = ((currentMin < 10) ? "0" : "") + currentMin;
    currentSec = ((currentSec < 10) ? "0" : "") + currentSec;

    let clock = document.getElementById("clock");
    clock.innerText = `${currentHr} : ${currentMin} : ${currentSec} ${timeOfDay}`;
}


setInterval(() => {
    updateClock();
}, 500);