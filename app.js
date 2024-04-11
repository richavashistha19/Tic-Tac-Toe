let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; 

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        //playerO
        box.innerText = "O";
        turnO = false;
      } else {
        //playerX
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;
      checkWin();
    });
});

const showWinner = (winner) => {
 msg.innerText = `Congratulations, winner is ${winner}`;
 msgContainer.classList.remove("hide");
}

const checkWin = () => {
    for(let pattern of winPatterns){
       
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1 ==pos2 && pos2==pos3){
            for(let box of boxes) {
                box.disabled = true;
            }
            showWinner(pos1);
        }
        else 
    }

    }
}

const reset = () => {
    turn0 = true;
    for(let box of boxes){
        box.enabled = true;
        box.innerText="";
    }
    msgContainer.classList.add("hide");

};

newGameBtn.addEventListener("click", reset);
resetBtn.addEventListener("click", reset);