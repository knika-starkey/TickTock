let tick = true;
let t;
let n = +prompt("Enter time in seconds");
t = setInterval(() => {
  if (tick) {
    document.write("Тик ");
    tick = false;
  } else {
    document.write("Так ");
    tick = true;
  }
}, 1000);
setTimeout(() => {
  clearInterval(t);
  alert("stop");
}, (n *= 1000));
