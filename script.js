let timer;
let timeLeft = 0;
let isPaused = false;
let initialTime = 0;

const timerDisplay = document.getElementById('timer');
const customTimeInput = document.getElementById('customTime');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const messageBox = document.getElementById('message');

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
}

function updateDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
}

function playBeepSequence() {
  return new Promise((resolve) => {
    const beep = new Audio('Mario-coin-sound.mp3');
    let count = 0;

    const interval = setInterval(() => {
      beep.currentTime = 0;
      beep.play();
      count++;
      if (count >= 3) {
        clearInterval(interval);
        setTimeout(resolve, 500); // pause before showing message
      }
    }, 800);
  });
}

function showMessage() {
  messageBox.style.display = 'block';
  setTimeout(() => {
    messageBox.style.display = 'none';
    timeLeft = initialTime;
    updateDisplay();
    startTimer();
  }, 4000); // Show message for 4 seconds
}

function startTimer() {
  if (!isPaused) {
    const minutes = parseInt(customTimeInput.value);
    if (isNaN(minutes) || minutes <= 0) {
      alert("Please enter a valid number of minutes.");
      return;
    }
    initialTime = minutes * 60;
    timeLeft = initialTime;
  }

  isPaused = false;
  startBtn.disabled = true;
  customTimeInput.disabled = true;

  timer = setInterval(() => {
    if (!isPaused) {
      timeLeft--;
      updateDisplay();

      if (timeLeft <= 0) {
        clearInterval(timer);
        playBeepSequence().then(showMessage);
      }
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
  clearInterval(timer);
  startBtn.disabled = false;
}

function resetTimer() {
  isPaused = false;
  clearInterval(timer);
  timeLeft = initialTime;
  updateDisplay();
  startBtn.disabled = false;
  customTimeInput.disabled = false;
  messageBox.style.display = 'none';
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initial display
updateDisplay();
