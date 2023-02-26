const dino = document.getElementById("dino");
const planty = document.getElementById("planty");
const customer = document.getElementById("customer");
const gameOver = document.getElementById("gameOver");
const timer = document.getElementById("timer");
const score = document.getElementById("score");
const lastScore = document.getElementById("lastScore");
let counter = 0;
let lScore = 0;
let coun = 0;
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
planty.classList.add("run-animation-planty");
customer.classList.add("run-animation-customer");
function jump() {
  if (!dino.classList.contains("jump")) dino.classList.add("jump");

  setTimeout(function () {
    dino.classList.remove("jump");
  }, 500);
}
const isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let plantyLeft = parseInt(
    window.getComputedStyle(planty).getPropertyValue("left")
  );
  let customerLeft = parseInt(
    window.getComputedStyle(customer).getPropertyValue("left")
  );
  if (
    dinoTop >= 140 &&
    ((0 < plantyLeft && plantyLeft < 30) ||
      (0 < customerLeft && customerLeft < 30))
  ) {
    lScore = Math.max(lScore, counter);
    lastScore.innerHTML = ` ${
      lScore < 10 ? "000" + lScore : lScore > 100 ? "0" + lScore : "00" + lScore
    }`;
    counter = 0;

    if (coun == 0) {
      gameOver.style.display = "flex";
      planty.style.animationPlayState = "paused";
      customer.style.animationPlayState = "paused";
      coun++;
    }

    // planty.style.left = "580px";
    // customer.style.left = "780px";
  }
}, 10);
function reload() {
  planty.style.animationPlayState = "running";
  customer.style.animationPlayState = "running";
  planty.classList.remove("run-animation-planty");
  customer.classList.remove("run-animation-customer");
  planty.style.left = "580px";

  gameOver.style.display = "none";
  setTimeout(() => {
    planty.classList.add("run-animation-planty");
    customer.classList.add("run-animation-customer");
    coun = 0;
    counter = 0;
  }, 300);
}
