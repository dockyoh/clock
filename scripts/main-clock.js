setInterval(() => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const hour12 = hourFormat12(hours);

  console.log(`${hour12}:${minutes}:${seconds}`);

  renderSecondHand(seconds);
}, 1000);

function hourFormat12(hours) {
  if (hours > 12) {
    return hours - 12;
  }
}

function renderSecondHand(seconds) {
  const secondHandEl = document.querySelector(".second-hand");

  const steps = 360 / 60;
  const degs = seconds * steps + 90;

  secondHandEl.style.transform = `rotate(${degs}deg)`;
}
