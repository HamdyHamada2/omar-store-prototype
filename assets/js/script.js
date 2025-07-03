// script.js

// حدد مدة العرض (مثلاً 1 ساعة من وقت فتح الصفحة)
const countdownMinutes = 60;
const endTime = new Date().getTime() + countdownMinutes * 60 * 1000;

const timerElement = document.getElementById("timer");

function updateTimer() {
  const now = new Date().getTime();
  const remaining = endTime - now;

  if (remaining <= 0) {
    timerElement.innerText = "انتهى العرض";
    return;
  }

  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  timerElement.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return number < 10 ? `0${number}` : number;
}

// حدث العداد كل ثانية
setInterval(updateTimer, 1000);

// شغل العداد فورًا عند التحميل
updateTimer();
