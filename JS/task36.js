let currentDate = new Date(2024, 10, 5, 7, 7, 7);
let Counter = document.getElementById("clock");

function CountDown() {
  let MeDate = new Date();
  let ToMill = MeDate.getTime();

  let Diff = Math.abs(ToMill - currentDate);

  const second = Math.trunc(Diff / 1000) % 60;
  const minute = Math.trunc((Diff / (1000 * 60)) % 60);
  const hour = Math.trunc((Diff / (1000 * 60 * 60)) % 24);
  const day = Math.trunc((Diff / (1000 * 60 * 60 * 24)) % 30);
  const month = Math.trunc((Diff / (1000 * 60 * 60 * 24 * 30)) % 12);
  //   const year = Math.trunc(Diff / (1000 * 60 * 60 * 24 * 30 * 12));

  Counter.innerHTML = `${month} Months, ${day} Days,  ${hour} Hours,  ${minute} Minutes, ${second} Seconds`;
}
CountDown();

setInterval(CountDown, 1000);
