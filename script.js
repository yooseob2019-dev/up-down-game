let answer = Math.floor(Math.random() * 100) + 1;
let tries = 0;
let maxTries = 7;
let gameOver = false;

function checkNumber() {
  if (gameOver) return;

  let user = Number(document.getElementById("userInput").value);
  let result = document.getElementById("result");
  let count = document.getElementById("count");

  tries++;
  count.textContent = `시도 횟수: ${tries} / ${maxTries}`;

  if (user === answer) {
    result.textContent = "정답입니다! 🎉";
    gameOver = true;
  } else if (tries >= maxTries) {
    result.textContent = `게임 오버 😢 정답은 ${answer}입니다.`;
    gameOver = true;
  } else if (user < answer) {
    result.textContent = "업 ⬆️";
  } else {
    result.textContent = "다운 ⬇️";
  }

  if (gameOver) {
    document.getElementById("userInput").disabled = true;
  }
}
