setInterval(() => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const hour12 = hourFormat12(hours);

  console.log(`${hour12}:${minutes}:${seconds}`);
}, 1000);

function hourFormat12(hours) {
  if (hours > 12) {
    return hours - 12;
  }
}
