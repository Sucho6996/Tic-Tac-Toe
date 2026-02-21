let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetBtn");

let turnO=false;
let winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

for(let box of boxes){
    box.addEventListener("click",()=>{
        box.innerText=turnO?"O":"X";
        box.disabled=true;
        turnO=!turnO;
        
        checkWinner()
    });
}

const checkWinner=()=>{
    for(let wp of winningPattern){
        let pos1=boxes[wp[0]].innerText;
        let pos2=boxes[wp[1]].innerText;
        let pos3=boxes[wp[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="" ){
            if(pos1===pos2 && pos2===pos3){
                for(let box of boxes){
                    box.disabled=true;
                }
                alert(`Player ${pos1} has won`);
                resetGame();
            }
        }
    }
}

const resetGame=()=>{
    turnO=false;
    for(let box of boxes){
        box.disabled=false;
        box.innerText=" ";
    }
}
resetBtn.addEventListener("click",resetGame);
