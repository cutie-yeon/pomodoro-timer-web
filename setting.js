window.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('timerInput');
  var btn = document.querySelector('.btn-save');

  var saved = localStorage.getItem('pomodoroMinutes');
  if (saved) {
    input.value = saved;
  }

  btn.onclick = function () {
    var value = input.value.trim();
    if (value === '') return;
    var minutes = parseInt(value, 10);
    if (isNaN(minutes) || minutes < 1 || minutes > 60) return;
    localStorage.setItem('pomodoroMinutes', minutes);
    window.location.href = 'index.html';
  };
});
