var maxParticleCount = 150; //set max confetti count
var particleSpeed = 2; //set the particle animation speed
var startConfetti; //call to start confetti animation
var stopConfetti; //call to stop adding confetti
var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
var removeConfetti; //call to stop the confetti animation and remove all confetti immediately

const fejden = "21 August, 2024 09:00:00";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


function countdown() {
  const fejdenDate = new Date(fejden);
  const currentDate = new Date();

  const totalSeconds = (fejdenDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;



  if (totalSeconds > 0) {
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
  } else {
    daysEl.innerHTML = 0;
    hoursEl.innerHTML = 0;
    minsEl.innerHTML = 0;
    secondsEl.innerHTML = 0;
  }
}


function formatTime(time) {
  return time < 10 ? `${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
