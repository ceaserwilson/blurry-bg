const text = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurr, 30);

function blurr() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  text.innerText = `${load}%`;
  text.style.opacity = scale(load, 0, 100, 1, 0);

  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (a, b, c, d, e) => {
  return ((a - b) * (e - d)) / (c - b) + d;
};
