const myLabel = document.getElementById("mylabel");
update();
setInterval(update, 1000);

function update() {
  let date = new Date();
  myLabel.innerHTML = formateTime(date);

  function formateTime(date) {
    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();
    let amOrpm = hour >= 12 ? "pm" : "am";
    hour = hour % 2 || 12;
    hours = formateZeroes(hour);
    min = formateZeroes(min);
    second = formateZeroes(second);

    return `${hour} : ${min} : ${second}`;
  }
}

function formateZeroes(time) {
  time = time.toString();
  return time.length < 2 ? "0" + time : time;
}
