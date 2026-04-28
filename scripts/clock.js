export function renderHands() {
  const secondHandEl = document.querySelector(".second-hand");
  const minuteHandEl = document.querySelector(".minute-hand");
  const hourHandEl = document.querySelector(".hour-hand");

  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const hour12 = hourFormat12(hours);

  const steps = 360 / 60;
  const hourSteps = 360 / 12;
  const secondsDegs = seconds * steps + 90;
  const minutesDegs = minutes * steps + 90;
  const hourDegs = hour12 * hourSteps + 90;

  secondHandEl.style.transform = `rotate(${secondsDegs}deg)`;
  minuteHandEl.style.transform = `rotate(${minutesDegs}deg)`;
  hourHandEl.style.transform = `rotate(${hourDegs}deg)`;
}

export function hourFormat12(hours) {
  if (hours > 12) {
    return hours - 12;
  }
}
