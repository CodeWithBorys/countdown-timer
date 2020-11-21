let countdown;
const timeDisplay = document.querySelector('.timer__display-time-left');
const endTime = document.querySelector('.timer__display-end-time');
const buttons = document.querySelectorAll('[data-time]');
const resetTimer = document.querySelector('.timer__display-reset');
let seconds;

function timer() {
  // clear existing timers if any
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now())/1000);
    // stop countdown
    if(secondsLeft <= 0) {
      clearInterval(countdown)
    }

    // display time
    displayTimeLeft(secondsLeft);
  }, 1000)
}

function displayTimeLeft(sec) {
  const minutes = Math.floor(sec / 60);
  const remainderSeconds = sec % 60;
  const time = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = time;
  timeDisplay.textContent = time;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `timer ends at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`
}

function startTimer() {
  seconds = parseInt(this.dataset.time);
  timer();
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customTime.addEventListener('submit', function(e) {
  e.preventDefault();
    const mins = this.minutes.value;
    seconds = mins * 60;
    timer();
    this.reset()
});

resetTimer.addEventListener('click', timer);