let tick = true;
let t;

let ticker = () => {
  if (tick) {
    document.write("Тик ");
    tick = false;
  } else {
    document.write("Так ");
    tick = true;
  }
};
let n = +prompt("Enter time in seconds");
t = setInterval(ticker, 1000);
setTimeout(() => {
  clearInterval(t);
  alert("stop");
}, (n *= 1000));
