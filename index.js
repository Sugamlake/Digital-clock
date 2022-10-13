const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = "AM";
  console.log(h, m, s);

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerHTML = h;
  minuteEl.innerHTML = m;
  secondEl.innerHTML = s;
  ampmEl.innerHTML = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}
