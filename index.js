import data from "./replaceme.json" with {type: "json"}; // CHANGE THIS

let remainingTime;

function loop() {
    remainingTime = data["end_timestamp"] - Math.floor((Date.now() / 1000));

    updateTimer();
}

function updateTimer() {
    if ((Date.now() / 1000) < data["start_timestamp"]) {
        document.getElementById('time-remaining').innerHTML = "Starting in:";
        document.getElementById('timer').innerHTML = formatTime(-(Math.floor(Date.now()/1000) - data["start_timestamp"]));
        return;
    }

    if ((Date.now() / 1000) > data["end_timestamp"]) {
        document.getElementById('time-remaining').innerHTML = "Time's up!";
        document.getElementById('timer').innerHTML = "00:00:00";
        return;
    }

    
    document.getElementById('time-remaining').innerHTML = "Time Remaining:";
    document.getElementById('timer').innerHTML = formatTime(remainingTime);



}
const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [hours, minutes, seconds]
        .map(val => String(val).padStart(2, '0'))
        .join(':');
};


document.addEventListener("DOMContentLoaded", () => {
    setInterval(loop, 1000);
})