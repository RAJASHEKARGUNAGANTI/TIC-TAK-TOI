const boxes = document.querySelectorAll(".box");
// console.log(boxes);

const winPattrens = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let count = 0;
let winner = document.querySelector(".winner");
let winnerfound = false;
const resetBtn = document.querySelector(".resetBtn");
const restartBtn = document.querySelector(".restartBtn");

const wincon = document.querySelector(".wincon");

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    wincon.style.display = "none";
    restartBtn.style.display = "none";
    count = 0;
    winnerfound = false;
  });
});

restartBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    wincon.style.display = "none";
    restartBtn.style.display = "none";
    count = 0;
    winnerfound = false;
  });
});

const checkWinPattren = () => {
  count++;
  winPattrens.forEach((win) => {
    win.forEach((i) => {
      if (boxes[i].innerText.length > 0) {
        let element1 = boxes[win[0]].innerText;
        let element2 = boxes[win[1]].innerText;
        let element3 = boxes[win[2]].innerText;
        if (element1 === element2 && element2 === element3) {
          winner.innerText = `Congratulations... Winner is ${element1}`;
          boxes.forEach((box) => {
            box.disabled = true;
            winnerfound = true;
            // count = 0;
            wincon.style.display = "block";
            restartBtn.style.display = "block";
          });
        }
      }
    });
  });
  if (count == 9 && !winnerfound) {
    winner.innerText = `Draw..!`;
    wincon.style.display = "block";
    restartBtn.style.display = "block";
    console.log(count);
    count = 0;
    winnerfound = false;
  }
};

let turn0 = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      box.style.color = "#E07A5F";
      turn0 = false;
    } else {
      box.innerText = "X";
      box.style.color = "#F2CC8F";
      turn0 = true;
    }
    checkWinPattren();
    box.disabled = true;
  });
});
