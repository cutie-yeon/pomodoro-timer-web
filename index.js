var savedMinutes = parseInt(localStorage.getItem('pomodoroMinutes'), 10) || 25;
let totalSeconds = savedMinutes * 60;
let remainingSeconds = totalSeconds;
let intervalId = null;

function updateDisplay() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  document.querySelector('.timer').textContent =
    String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
}

function startTimer() {
  if (intervalId !== null) return;
  intervalId = setInterval(function () {
    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      return;
    }
    remainingSeconds--;
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  stopTimer();
  remainingSeconds = totalSeconds;
  updateDisplay();
}

updateDisplay();
