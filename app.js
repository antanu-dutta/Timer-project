// ! DOM Reference
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const getTime = document.querySelector("#getTime");
const clearTime = document.querySelector("#clearTime");
const time = document.querySelector(".time");
const info = document.querySelector(".info");
const timeStatus = document.querySelector(".status");

let count = 1;
let intervalID;

// ! Event Functions
function stopTimer() {
  clearInterval(intervalID);
  const pTag = document.createElement("p");
  pTag.classList.add("status");
  pTag.innerHTML = `You Stopped At ${count - 1} `;
  info.append(pTag);
}
function resetTimer() {
  time.innerHTML = "0";
  clearInterval(intervalID);
  count = 1;
}
function getTimer() {
  const pTag = document.createElement("p");
  pTag.classList.add("status");
  pTag.innerHTML = `Your Time is ${count - 1} `;
  info.append(pTag);
}
function clearTimer() {
  info.innerHTML = "";
}

// ! Event Fired
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
getTime.addEventListener("click", getTimer);
clearTime.addEventListener("click", clearTimer);
function startTimer() {
  intervalID = setInterval(() => {
    time.innerHTML = count++;
  }, 1000);
}
