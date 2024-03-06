//eligible for vote or not
let a = parseInt(prompt("enter your age:"));

if (a > 18) {
  let natio = prompt("enter your nationality:");
  if (natio == "indian") {
    alert("eligible for vote");
  } else {
    alert("not eligible for vote");
  }
} else {
  alert("not eligible for vote");
}
