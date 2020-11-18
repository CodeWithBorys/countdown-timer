let countdown;
const timeDisplay = document.querySelector('.timer__display-time-left');
const endTime = document.querySelector('.timer__display-end-time');

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now())/1000);
    // stop countdown
    if(secondsLeft < 0) {
      clearInterval(countdown)
    }

    // display time
    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const time = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = time;
  timeDisplay.textContent = time;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `timer ends at ${hour}:${minutes}`
}
