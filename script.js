const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const timer = document.getElementById("timer");
const score = document.getElementById("score");
const lastScore = document.getElementById("lastScore");
let counter = 0;
let lScore = 0;
const changeScore = setInterval(function () {
  score.innerHTML = ` ${
    counter < 10
      ? "000" + counter
      : counter > 100
      ? "0" + counter
      : "00" + counter
  }`;
  counter += 1;
}, 500);
document.addEventListener("keydown", function () {
  jump();
});

function jump() {
  if (!dino.classList.contains("jump")) dino.classList.add("jump");

  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}
const isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (dinoTop >= 140 && 0 < cactusLeft && cactusLeft < 50) {
    lScore = Math.max(lScore, counter);
    lastScore.innerHTML = ` ${
      lScore < 10 ? "000" + lScore : lScore > 100 ? "0" + lScore : "00" + lScore
    }`;
    counter = 0;
    alert("Game Over");
  }
}, 10);
