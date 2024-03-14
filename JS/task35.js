function CDateF(h, m, s) {
  let currentDate = new Date();
  var h = currentDate.getHours();
  var m = currentDate.getMinutes();
  var s = currentDate.getSeconds();

  let AMorPM = "AM";

  if (h >= 12) {
    AMorPM = "PM";
    h = h - 12;
  }
  if (h > 12) {
    h = h - 12;
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (h === 0) {
    h = 12;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  document.getElementById("clock").innerHTML = `${h}:${m}:${s} ${AMorPM}`;
}

CDateF();
