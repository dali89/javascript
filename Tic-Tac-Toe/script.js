let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGame=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");

let turn0 = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn0 =true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
         
            if (turn0) {
                box.innerText = "0";
                turn0 = false;
            } else {
                box.innerText = "X";
                turn0 = true;
            }
          box.disabled = true;
count++;
           let isWinner=checkWinner();

           if(count === 9 && !isWinner){
            gameDraw();
           }
    });
});

const gameDraw = () => {
    msg.innerText = "Game was Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner= () =>{
    for(let pattern of winPatterns){
      let pos1Val=boxes[pattern[0]].innerText;
      let pos2Val=boxes[pattern[1]].innerText;
      let pos3Val=boxes[pattern[2]].innerText;
   
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("Winner",pos1Val);
            showWinner(pos1Val);
            return true;
        }
    }
   
   
    }
};

const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner=(winner) =>{
    // let msg = winner === "0" ? "Player 0 Wins!" : "Player X Wins!";  
    // document.querySelector("#msg").innerText = msg;
    msgContainer.innerText="Congratulations";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);