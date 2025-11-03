const timeDisplay = document.getElementById('time-display');
const startButton = document.getElementById('start');   
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

let totalSeconds = 30 * 60; 
let timerInterval = null;
let isRunning  = false;

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimeDisplay() {
    timeDisplay.textContent = formatTime(totalSeconds);
}

function startTimer() {
    if (isRunning) return; 
    isRunning = true;       
    timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;     
            updateTimeDisplay();
        } else {
            clearInterval(timerInterval);
            isRunning = false; 
            alert("Time's up!");
        } 
    }, 1000);
}

function pauseTimer() {
    if (!isRunning) return;
    clearInterval(timerInterval);
    isRunning = false; 
} 

function resetTimer() {
    clearInterval(timerInterval);
    totalSeconds = 30 * 60; 
    updateTimeDisplay();
    isRunning = false; 
}

updateTimeDisplay();

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

