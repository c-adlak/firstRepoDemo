const endDate = "07 july 2023 01:25 PM";

document.getElementById("endDate").innerText = endDate;
const inputs = document.querySelectorAll("input");
//const clock=()=>{

//}

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  console.log(diff);
  if (diff < 0) return;
  //convert into days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  //calculate hours
  inputs[1].value = Math.floor((diff / 3600) % 24);
  //calculate minutes
  inputs[2].value = Math.floor((diff / 60) % 60);
  //calculate seconds
  inputs[3].value = Math.floor(diff % 60);

  //convert into days
}

//initial call
clock();

/**
 * 1day = 24hours
 * 1hour = 60min
 * 60mi = 3600sec
 */

setInterval(() => {
  clock();
}, 1000);
