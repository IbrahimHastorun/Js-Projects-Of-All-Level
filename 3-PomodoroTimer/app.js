const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

const timerText = document.getElementById("timer-text");

let second = (25 * 60);
let timer;
let remainingSecond;

startBtn.addEventListener("click" , () => {
    stopBtn.classList.remove("disabled");
    resetBtn.classList.remove("disabled");
    startBtn.classList.add("disabled");
    if (!remainingSecond) {
        timer = setInterval(() => {
            if (second == 0) {
                window.location.reload();
            } else {
                second--;
                remainingSecond = second;
                calculateTime(second);
            }
        }, 1000);
    } else {
        timer = setInterval(() => {
            if (remainingSecond == 0) {
                window.location.reload();
            } else {
                remainingSecond--;
                calculateTime(remainingSecond);
            }
        }, 1000);
    }
});

stopBtn.addEventListener("click" , () => {
    startBtn.classList.remove("disabled");
    stopBtn.classList.add("disabled");
    clearInterval(timer);
});

resetBtn.addEventListener("click" , () => {
    second = (25 * 60);
    remainingSecond = "";
    startBtn.classList.remove("disabled");
    stopBtn.classList.add("disabled");
    resetBtn.classList.add("disabled");
    clearInterval(timer);
    timerText.innerText = "25:00";
});

const calculateTime = (time) => {
    const minute = parseInt(time / 60);
    const second = parseInt(time % 60);
    const updateSecond = second < 10 ? `0${second}` : second;
    timerText.innerText = `${minute}:${updateSecond}`;
};