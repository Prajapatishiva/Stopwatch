//Function to update the real-time clock
function updateClock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? "PM" : "AM"; 

    hours = hours % 12||12;
    minutes = minutes < 10 ? "0"+ minutes:minutes;
    seconds = seconds < 10 ? "0"+ seconds:seconds;

    document.getElementById("current-time").textContent =`${hours}:${minutes}:${seconds}${amPm}`;
}

// Stopwatch variables
let stopwatchInterval;
let elapsedSeconds =0;
let running = false;

// function to update stopwatch display
function updateStopwatch(){
    let hours = Math.floor(elapsedSeconds/3600);
    let minutes = Math.floor((elapsedSeconds%3600)/60);
    let seconds = elapsedSeconds %60;

    hours = hours < 10 ? "0" + hours:hours;
    minutes = minutes < 10 ? "0" + minutes:minutes;
    seconds = seconds < 10 ? "0" +seconds:seconds;

    document.getElementById("stopwatch-time").textContent =`${hours}:${minutes}:${seconds}`;
}

// Start/Stop button functionality
document.getElementById("startStop").addEventListener("click",function(){
    if(running){
        clearInterval(stopwatchInterval);
        this.textContent = "Start";
        this.style.background ="#32cd32";
    }else{
        stopwatchInterval = setInterval(() => {
            elapsedSeconds++;
            updateStopwatch();
        }, 1000);
        this.textContent = "Stop";
        this.style.background = "#ff8c00"
    }
    running =!running;
});

//Reset button functionality
document.getElementById("reset").addEventListener("click",function(){
    clearInterval(stopwatchInterval);
    elapsedSeconds = 0;
    running= false;
    updateStopwatch();
    document.getElementById("startStop").textContent ="Start";
    document.getElementById("startStop").style.background = "#32cd32"
});

//Update the clock every second
setInterval(updateClock,1000);
updateClock(); //initialize the clock immediately
