const no = Math.floor(Math.random() * 10 + 1);
let guesses = 0;
document.getElementById("button").onclick = function () {
  let yourno = document.getElementById("textfield").value;
  guesses += 1;

  if (yourno == no) {
    alert(`${no} you guesses correct! and took ${guesses} guesses`);
  } else if (yourno < no) {
    alert("you guessed small no");
  } else {
    alert("you guessed large no");
  }
};
