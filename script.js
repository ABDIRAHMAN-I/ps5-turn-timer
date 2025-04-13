let timer;
let timeLeft = 360;

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
}

function startTimer() {
  document.getElementById('startBtn').disabled = true;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = formatTime(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timer);
      new Audio('Mario-coin-sound.mp3').play(); // add sound.mp3 to folder
      alert("Time's up! Pass the controller.");
      timeLeft = 360;
      document.getElementById('timer').textContent = formatTime(timeLeft);
      startTimer(); // restart
    }
  }, 1000);
}

document.getElementById('startBtn').addEventListener('click', startTimer);
