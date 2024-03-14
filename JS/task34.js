function DateNow() {
  let DNow = new Date();
  let H = DNow.getHours();
  let M = DNow.getMinutes();
  let S = DNow.getSeconds();
  let AMorPM = "AM";
  if (H >= 12) {
    AMorPM = "PM";
  }
  if (H > 12) {
    H = H - 12;
  } else if (H < 10) {
    H = "0" + H;
  } else if (H === 0) {
    H = 12;
  } else if (M < 10) {
    M = "0" + M;
  } else if (S < 10) {
    S = "0" + S;
  }
  document.getElementById("clock").innerHTML = `${H}:${M}:${S} ${AMorPM}`;
}
setInterval(DateNow, 1000);
