const startTime = .1;

let time = startTime * 60;

const countdownTimer = document.getElementById('timer');

let timing = setInterval(updateTime, 1000)

let  minutes, seconds;

function updateTime() {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownTimer.innerHTML = `${minutes}:${seconds}`;
    console.log(countdownTimer.innerHTML)
    if (minutes >= 0 && seconds > 0){
        time--;
    } else {
        clearInterval(timing);
        setTimeout(alert("You had next... YOU ARE NOW \n 🏋️💪😤 \n The machine you reserved is available"), 1000);
    }
}

/* if (countdownTimer.innerHTML == `0:00`){
    clearInterval(timing);
}; */

